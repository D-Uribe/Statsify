import { useEffect, useState } from "react";
import { WelcomeMsg } from "./components/WelcomeMsg";

const getToken = async (code) => {
  const codeVerifier = localStorage.getItem("code_verifier");

  const clientId = "b4d80e95de2b46fda1930bd70b1c484e";
  const redirectUri = "http://127.0.0.1:5173/callback";

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
  console.log("TOKEN RESPONSE:", data);
  localStorage.setItem("access_token", data.access_token);
  //console.log("TOKEN RESPONSE:", data);

  return data.access_token;
};

const getProfile = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  //console.log("ACCESS TOKEN:", accessToken);
  return data;
};

const getTracks = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  //console.log("ACCESS TOKEN:", accessToken);
  return data;
};

const getArtists = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  //console.log("ACCESS TOKEN:", accessToken);
  return data;
};

const Callback = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  const [content, setContent] = useState();
  const [songs, setSongs] = useState();
  const [artists, setArtists] = useState();

  useEffect(() => {
    if (code) {
      const getData = async () => {
        const accessToken = await getToken(code);
        if (accessToken) {
          const profile = await getProfile(accessToken);
          const tracks = await getTracks(accessToken);
          const artistData = await getArtists(accessToken);
          setContent(profile);
          setSongs(tracks);
          setArtists(artistData);
        }
      };
      getData();
    }
  }, [code]);

  return (
    <>
    <div className="flex justify-between p-10 bg-black">
      <h1 className="text-6xl text-white">Statsify</h1>
      <div className="flex items-center gap-2">
        <img className="rounded-full w-15 h-15" src={content?.images[0].url} />
        <p className="text-white">{content?.display_name}</p>
      </div>
    </div>
    <div><WelcomeMsg></WelcomeMsg></div>
    </>
  );
};

export default Callback;
