import { useEffect, useState } from "react";
import { WelcomeMsg } from "./components/WelcomeMsg";
import { TopTracks } from "./components/TopTracks";
import { TopArtists } from "./components/TopArtists";
import { ArtistPresence } from "./components/ArtistPresence";
import { Footer } from "./components/Footer";
import { ClipLoader } from "react-spinners";

const getToken = async (code) => {
  const codeVerifier = localStorage.getItem("code_verifier");

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

    console.log("redirectUri:", redirectUri)  // 👈 aquí
    console.log("clientId:", clientId)

    console.log("body:", {
    client_id: clientId,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
})

  const body = new URLSearchParams({
    client_id: clientId,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
  });


  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  const data = await response.json();

  if (!data.access_token) {
    console.error("No token found", data);
    return null;
  }
  localStorage.setItem("access_token", data.access_token);

  return data.access_token;
};

const getProfile = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data;
};

const getTracks = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data;
};

const getArtists = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  return data;
};

const Callback = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  const [content, setContent] = useState();
  const [songs, setSongs] = useState();
  const [artists, setArtists] = useState();
  const [spinner, setSpinner] = useState(false);

  const artistNames = songs?.items
    .slice(0, 10)
    .map((song) => song.artists[0].name);

  function countArtists(acc, val) {
    acc[val] ??= 0;
    acc[val] += 1;
    return acc;
  }

  const artistFrequency = artistNames?.reduce(countArtists, {});

  useEffect(() => {
    if (code) {
      setSpinner(true);
      const existingToken = localStorage.getItem("access_token");

      const getData = async () => {
        const accessToken = existingToken || (await getToken(code));
        if (accessToken) {
          const profile = await getProfile(accessToken);
          const tracks = await getTracks(accessToken);
          const artistData = await getArtists(accessToken);
          setContent(profile);
          setSongs(tracks);
          setArtists(artistData);
          setSpinner(false);
        }
      };
      getData();
    }
  }, [code]);

  return (
    <>
      <div className=" flex w-full xs:flex justify-between p-10 bg-black ">
        <h1 className=" text-4xl xs:text-6xl text-white">Statsify</h1>
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-10 h-10 xs:rounded-full xs:w-15 xs:h-15"
            src={content?.images[0].url}
          />
          <p className="text-white">{content?.display_name}</p>
        </div>
      </div>
      {spinner && (
        <div className="flex justify-center items-center min-h-screen">
          <ClipLoader color="#1DB954" size={50} />
        </div>
      )}
      {content && (
        <div className="flex items-center justify-center mt-10">
          <WelcomeMsg></WelcomeMsg>
        </div>
      )}

      <div>
        <TopTracks tunes={songs}></TopTracks>
      </div>
      <div>
        <TopArtists creators={artists}></TopArtists>
      </div>
      <div>
        <ArtistPresence artistFrequency={artistFrequency}></ArtistPresence>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Callback;
