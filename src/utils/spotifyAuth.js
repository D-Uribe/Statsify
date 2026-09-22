const generateCodeVerifier = (length) => {
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const values = crypto.getRandomValues(new Uint8Array(length));

    return values.reduce(
        (acc, x) => acc + possible[x % possible.length],
        ""
    );
};

const generateCodeChallenge = async (codeVerifier) => {
    const data = new TextEncoder().encode(codeVerifier);

    const digest = await crypto.subtle.digest("SHA-256", data);

    return btoa(
        String.fromCharCode(...new Uint8Array(digest))
    )
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
};

export const loginWithSpotify = async () => {
    const clientId = import.meta.env.VITE_CLIENT_ID
    const redirectUri = import.meta.env.VITE_REDIRECT_URI

    const codeVerifier = generateCodeVerifier(64);
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("code_verifier", codeVerifier);

    const params = new URLSearchParams({
        client_id: clientId,
        response_type: "code",
        redirect_uri: redirectUri,
        scope: "user-read-private user-read-email user-top-read",
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
        show_dialog: true
    });

    window.location.href =
        `https://accounts.spotify.com/authorize?${params.toString()}`;
};