import React from "react";
import "./styles/styles.css";
import background from "./assets/backgroundvid.mp4";
import musicPlayer from "./assets/music-player.png";
import headphones from "./assets/headphones.png";
import graph from "./assets/graph.png";
import spotifyLogo from "./assets/spotify.webp";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import Icon from "./components/Icon";
import Socials from "./components/Socials";
import statsifylogo from "./assets/bar-chart.png";
import { motion } from "motion/react";
import { loginWithSpotify } from "./utils/spotifyAuth";
import Callback from "./Callback";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};





export const Welcome = () => {
  return (
    <>
      <div className="relative min-h-screen bg-black">
        <video className="w-full absolute" autoPlay loop muted preload="auto">
          <source src={background} type="video/mp4" />
        </video>
        <div className="relative z-10">
          <div className="top-container flex justify-center items-center flex-col min-h-screen pb-40">
            <h1 className="font-pacifico text-[12rem] mt-3">Statsify</h1>
            <p className="mt-20 text-5xl">
              See what you've been listening to,{" "}
              <span className="font-bold">right now</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-32">
        <p className="text-5xl mt-6">Don't wait for December.</p>
      </div>
      <div className="flex justify-center mt-24">
        <p className="description text-2xl">
          Explore your top artists, tracks, and listening habits anytime you
          want. No need to wait for Spotify Wrapped.
          <br />
          With Statsify you can observe your:
        </p>
      </div>

      <motion.div
        className="grid grid-cols-3 gap-4 mt-30"
        variants={container}
        initial="hidden"
        whileInView={"show"}
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center text-center gap-3"
        >
          <Icon src={musicPlayer} alt="music player icon" />
          <p className="feature text-3xl">Top Tracks</p>
          <p>Explore your most played songs.</p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center text-center gap-3"
        >
          <Icon src={headphones} alt="headphones icon" />
          <p className="feature text-3xl">Listening Insights</p>
          <p>Visualize your music statistics.</p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center text-center gap-3"
        >
          <Icon src={graph} alt="graph icon" />
          <p className="feature text-3xl">Top Artists</p>
          <p className="">Meet your favorite creators.</p>
        </motion.div>
      </motion.div>

      <div className="flex justify-center items-center mt-10">
        <button
          type="button"
          className="flex justify-center items-center gap-5 spotify-logo bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={loginWithSpotify}
        >
          <img src={spotifyLogo} alt="Spotify Logo" />
          Login with Spotify
        </button>
      </div>

      <footer className="footer  bg-green-100 flex justify-around items-center mt-15 p-10">
        <div className="flex items-center gap-2">
          <img src={statsifylogo} alt="Statsify Logo" />
          <p className="text-2xl">Statsify</p>
        </div>

          <div>
            <ul>
              <li>Home</li>
              <li>Privacy Policy</li>
            </ul>

          </div>

        <div className="flex justify-center items-center gap-5">
          
          <Socials
            src={github}
            alt="Github"
            href="https://github.com/D-Uribe"
          />
          <Socials
            src={linkedin}
            alt="Linkedin"
            href="https://www.linkedin.com/in/diego-joaquin-uribe-sandoval/"
          />
        </div>
      </footer>
    </>
  );
};

/*      <div className="grid grid-cols-3 gap-4 mt-30">
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
      </div> */

/* <div className="vinyl">
          <div className="vinyl-center">
            <img src={spotifyLogo} alt="Spotify Logo" />
          </div>
        </div> */
