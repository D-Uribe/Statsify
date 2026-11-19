import "./styles/styles.css";
import background from "./assets/backgroundvid.mp4";
import musicPlayer from "./assets/music-player.png";
import headphones from "./assets/headphones.png";
import graph from "./assets/graph.png";
import spotifyLogo from "./assets/spotify.webp";
import Icon from "./components/Icon";
import { motion } from "motion/react";
import { loginWithSpotify } from "./utils/spotifyAuth";
import { Footer } from "./components/Footer";


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
      <div className="relative min-h-screen bg-black md:500px">
        <video className="w-full h-full absolute object-cover" autoPlay loop muted playsInline preload="auto">
          <source src={background} type="video/mp4" />
        </video>
        <div className="relative z-10">
          <div className="top-container flex justify-center items-center flex-col min-h-screen pb-40">
            <h1 className="text-8xl xs:text-9xl mt-3 md:text-[12rem]">Statsify</h1>
            <p className="text-4xl xs:text-5xl mt-20 text-center md:text-6xl">
              See what you've been listening to,{" "}
              <span className="font-bold">right now</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-32">
        <p className="text-2xl text-center xs:text-5xl mt-6">Don't wait for December.</p>
      </div>
      <div className="flex justify-center mt-24 p-4">
        <p className="text-2xl text-center xs:text-4xl description">
          Explore your top artists, tracks, and listening habits anytime you
          want. No need to wait for Spotify Wrapped.
          <br />
          With Statsify you can observe your{" "}:
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
          <p className="text-2xl xs:text-3xl feature">Top Tracks</p>
          <p className="">Explore your most played songs.</p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center text-center gap-3"
        >
          <Icon src={headphones} alt="headphones icon" />
          <p className="text-2xl xs:text-3xl feature">Listening Insights</p>
          <p>Visualize your music statistics.</p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center text-center gap-3"
        >
          <Icon src={graph} alt="graph icon" />
          <p className="text-2xl xs:text-3xl feature">Top Artists</p>
          <p>Meet your favorite creators.</p>
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
      <Footer></Footer>
    </>
  );
};
