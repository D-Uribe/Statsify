<img width="1869" height="831" alt="image" src="https://github.com/user-attachments/assets/9a44456e-3735-4714-b380-a129b7a83772" /># Statsify 🎵

Your personal Spotify stats, anytime. Don't wait for December.

Statsify connects to your Spotify account and gives you real-time insights into your listening habits — your top artists, most played tracks, and music trends, whenever you want them.

## Live Demo

🔗 [statsify.netlify.app](https://eclectic-fudge-42f267.netlify.app)

## Features

- 🔐 Secure authentication via **OAuth 2.0 with PKCE** (Spotify)
- 🎵 Your **Top 10 tracks** with album art and artist info
- 🎤 Your **Top 5 artists** with profile images
- 🍩 **Artist Presence chart** — visualizes which artists dominate your top 10 tracks
- 📱 Fully responsive design

## Technologies

- React
- Tailwind CSS v4
- Spotify Web API
- OAuth 2.0 (PKCE flow)
- Chart.js / react-chartjs-2
- Framer Motion
- Netlify

## How it works

1. Click **Login with Spotify**
2. Authorize Statsify to access your listening data
3. Spotify redirects you back with your stats

## Getting Started

1. Clone the repository
2. Install dependencies
```bash
npm install
```
3. Create a `.env` file in the root:
```
VITE_CLIENT_ID=your_spotify_client_id
VITE_REDIRECT_URI=http://127.0.0.1:5173/callback
```
4. Register your app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and add `http://127.0.0.1:5173/callback` as a Redirect URI
5. Run the app
```bash
npm run dev
```

## Preview

<img width="1869" height="831" alt="image" src="https://github.com/user-attachments/assets/f774d3e5-4062-4414-917a-0e1faa241438" />


## Made by

Diego Uribe — [GitHub](https://github.com/D-Uribe)
