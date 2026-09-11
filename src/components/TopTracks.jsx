export const TopTracks = ({ tunes }) => {
  return (
    <>
      <p className="text-center text-3xl">Your top 10 songs:</p>
      <div className="grid grid-cols-1 grid-rows-10  w-125 mx-auto">
        {tunes?.items.slice(0, 10).map((song, index) => (
          <>
            <div className="flex items-center max-w-lg w-full divide-black border-2 border-black">
              <p className=" w-8 text-center text-2xl font-bold">{index + 1}</p>
              <img src={song.album.images[0].url} className="w-18 h-18"></img>
              <p className=" text-black" key={song.id}>
                {song.artists[0].name}-{song.name}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
