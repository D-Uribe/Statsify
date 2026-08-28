export const TopTracks = ({ tunes }) => {




  return (
    <div>
       {tunes?.items.slice(0,10).map(song =>
       <>
       <p className="text-2xl text-blue-600"key={song.id} >{song.artists[0].name}-{song.name}</p>
       <img src={song.album.images[0].url}></img>
       </>
       )}
    </div>
  )
}
