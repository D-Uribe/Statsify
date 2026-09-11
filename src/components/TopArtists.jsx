export const TopArtists = ({ creators }) => {
  return (
    <>
      <p className="text-center text-3xl">Your top 10 artists:</p>
      <div className="grid grid-cols-1 grid-rows-5  w-125 mx-auto">
        {creators?.items.slice(0, 5).map((artist, index) => (
          <>
            <div className="flex items-center max-w-lg w-full divide-black border-2 border-black">
              <p className=" w-8 text-center text-2xl font-bold">{index + 1}</p>
              <img
                key={artist.id}
                src={artist.images[0].url}
                className="w-24 h-24"
              ></img>
              <p>{artist.name}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
