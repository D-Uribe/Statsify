export const TopTracks = ({ tunes }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-10">
      {tunes?.items.slice(0, 10).map((song) => (
        <>
        <div className="">
        <img src={song.album.images[0].url} className="w-18 h-18"></img>
          <p className="text-2xl text-blue-600" key={song.id}>
            {song.artists[0].name}-{song.name}
          </p>
          </div>
        </>
      ))}
    </div>
  );
};
