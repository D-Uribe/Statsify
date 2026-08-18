import { useEffect } from "react";

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

  if(!data.access_token){
    console.error("No token found", data)
    return null
  }
  localStorage.setItem("access_token", data.access_token);
  console.log("TOKEN RESPONSE:", data);

  return data.access_token;
};

const getProfile = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  console.log("ACCESS TOKEN:", accessToken);

  console.log(data);
};

const Callback = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code) {
      const getData = async () => {
        const accessToken = await getToken(code);
        if(accessToken)
        await getProfile(accessToken);
      };
      getData();
    }
  }, [code]);

  return (
    <div>
      <h1>Spotify Callback</h1>
      <p>Authorization code received!</p>
    </div>
  );
};

export default Callback;
