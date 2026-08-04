import React from "react";
import "./styles/styles.css";
import musicPlayer from "./assets/music-player.png";
import headphones from "./assets/headphones.png";
import graph from "./assets/graph.png";
import spotifyLogo from "./assets/spotify.webp";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import Icon from "./components/Icon";

export const Welcome = () => {
  return (
    <>
      <div className="main-container flex justify-center items-center flex-col">
        <h1 className="font-pacifico text-9xl mt-3">Statsify</h1>
        <p className="mt-20 text-3xl">
          See what you've been listening to, right now.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-30">
        <div className="flex flex-col items-center text-center gap-3">
          <Icon src={musicPlayer} alt="music player icon" />
          <p className="feature text-3xl">Your Top Tracks</p>
          <p>Explore your most played songs.</p>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <Icon src={headphones} alt="headphones icon" />
          <p className="feature text-3xl">Listening Insights</p>
          <p>Visualize your music statistics.</p>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <Icon src={graph} alt="graph icon" />
          <p className="feature text-3xl">Top Artists</p>
          <p className="">Meet your favorite creators.</p>
        </div>
      </div>
      <hr className="section-divider"></hr>
      <div className="flex justify-center items-center">
        <p className="text-3xl mt-6">Don't wait for December.</p>
      </div>
      <div className="flex justify-around mt-24">
        <p className="description text-2xl">
          Explore your top artists, tracks, and listening habits anytime you
          want. No need to wait for Spotify Wrapped.
        </p>
        <div className="vinyl">
          <div className="vinyl-center">
            <img src={spotifyLogo} alt="Spotify Logo" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          type="button"
          className="flex justify-center items-center gap-5 spotify-logo bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          <img src={spotifyLogo} alt="Spotify Logo" />
          Login with Spotify
        </button>
      </div>
      <footer className="footer  bg-green-400 flex justify-center items-center flex-col mt-3 gap-5">
        <p>© 2026 Statsify</p>

        <p className="text-center">
          Built with React, Tailwind CSS & Spotify Web API
          <br />
          by Diego Uribe
        </p>
        <div className="flex justify-center items-center gap-5 mb-5">
          <img src={github} />
          <img src={linkedin} />
        </div>
      </footer>
    </>
  );
};
