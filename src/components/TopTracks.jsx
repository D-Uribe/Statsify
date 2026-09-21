export const TopTracks = ({ tunes }) => {
  return (
    <>
      <p className="text-center text-black text-2xl font-bold mb-5">
        Your top 10 songs:
      </p>
      <div className="grid grid-cols-1 gap-4 w-[85%] mx-auto md:w-125">
        {tunes?.items.slice(0, 10).map((song, index) => (
          <>
            <div
              className="flex items-center gap-4 p-3 bg-zinc-900 rounded-xl border border-zinc-800"
              key={song.id}
            >
              <p className="text-zinc-500 font-bold w-6 text-center">
                {index + 1}
              </p>
              <img
                src={song.album.images[0].url}
                className="w-16 h-16 rounded-lg object-cover"
              ></img>
              <div>
                <p className=" text-white font-semibold">{song.name}</p>
                <p className="text-zinc-400 text-sm">{song.artists[0].name}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
