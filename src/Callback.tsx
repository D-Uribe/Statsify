import { useEffect, useState } from "react";
import { WelcomeMsg } from "./components/WelcomeMsg";
import { TopTracks } from "./components/TopTracks";
import { TopArtists } from "./components/TopArtists";
import { ArtistPresence } from "./components/ArtistPresence";
import { Footer } from "./components/Footer";
import { ClipLoader } from "react-spinners";
import type { Image, Song, Artist, List } from "./types";

type Profile = {
  display_name: string;
  images: Image[];
};

const getToken = async (code: string) => {
  const codeVerifier = localStorage.getItem("code_verifier");
  if (!codeVerifier) {
    console.error("No token found");
    return null;
  }

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

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

const obtain = async <T,>(url: string, accessToken: string): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

const Callback = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  const [content, setContent] = useState<Profile | null>(null);
  const [songs, setSongs] = useState<List<Song> | null>(null);
  const [artists, setArtists] = useState<List<Artist> | null>(null);
  const [spinner, setSpinner] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("code_verifier");
    window.location.href = "/";
  };

  const artistNames = songs?.items
    .slice(0, 10)
    .map((song) => song.artists[0].name);

  function countArtists(acc: Record<string, number>, val: string) {
    acc[val] ??= 0;
    acc[val] += 1;
    return acc;
  }

  const artistFrequency = artistNames?.reduce(countArtists, {});

  useEffect(() => {
    if (!code) {
      localStorage.removeItem("access_token");
      window.location.href = "/";
      return;
    }
    setSpinner(true);
    localStorage.removeItem("access_token");

    const getData = async () => {
      const accessToken = await getToken(code);
      if (accessToken) {
        const profile = await obtain<Profile>(
          "https://api.spotify.com/v1/me",
          accessToken,
        );

        const song = await obtain<List<Song>>(
          "https://api.spotify.com/v1/me/top/tracks",
          accessToken,
        );

        const artist = await obtain<List<Artist>>(
          "https://api.spotify.com/v1/me/top/artists",
          accessToken,
        );
        setContent(profile);
        setSongs(song);
        setArtists(artist);
        setSpinner(false);
      }
    };
    getData();
  }, [code]);

  return (
    <>
      <div className=" flex w-full xs:flex justify-between p-10 bg-black ">
        <h1 className=" text-4xl xs:text-6xl text-white">Statsify</h1>
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-10 h-10 xs:rounded-full xs:w-15 xs:h-15"
            src={content?.images?.[0]?.url}
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
      <div className="flex justify-center items-center mt-5">
        <button
          onClick={handleLogout}
          className="flex justify-center items-center gap-5 spotify-logo bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          Log out
        </button>
      </div>
      <div>
        
      </div>
      <Footer></Footer>
    </>
  );
};

export default Callback;
