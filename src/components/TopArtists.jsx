export const TopArtists = ({ creators }) => {
  return (
    <>
      <p className="text-center text-black text-2xl font-bold mb-5 mt-4">Your top 5 artists:</p>
      <div className="grid grid-cols-1 grid-rows-5  w-125 mx-auto gap-4">
        {creators?.items.slice(0, 5).map((artist, index) => (
          <>
            <div className="flex items-center gap-4 p-3 bg-zinc-900 rounded-xl border border-zinc-800"
              key={artist.id}>
              <p className="text-zinc-500 font-bold w-6 text-center">{index + 1}</p>
              <img
                src={artist.images[0].url}
                className="w-16 h-16 rounded-lg object-cover"
              ></img>
              <p className="text-white font-semibold">{artist.name}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
