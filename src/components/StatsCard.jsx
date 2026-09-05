import { ArtistPresence } from "./ArtistPresence";

export const StatsCard = ({ info, tunes, creators, artistFrequency }) => {
  return (
    <>
      <div className="bg-black text-center p-5">
        <h1 className="text-white text-4xl">Statsify</h1>
      </div>
      <div className="flex flex-col items-center text-center">
        <p>{info?.display_name}'s Music Stats</p>
        <div className="flex flex-col items-center">
          <p>#1 Track</p>
          <img
            src={tunes?.items[0].album.images[1].url}
            className="w-32 h-32 rounded-xl object-cover"
          ></img>
          <p>
            {tunes?.items[0].artists[0].name} - {tunes?.items[0].name}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p>#1 Artist</p>
          <img
            src={creators?.items[0].images[1].url}
            className="w-32 h-32 rounded-xl object-cover"
          ></img>
          <p>{creators?.items[0].name}</p>
        </div>
        <div className="w-72">
          <ArtistPresence artistFrequency={artistFrequency}></ArtistPresence>
        </div>
      </div>
    </>
  );
};
