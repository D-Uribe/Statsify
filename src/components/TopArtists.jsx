export const TopArtists = ({ creators }) => {
  return (
    <div>
        {creators?.items.slice(0,5).map(artist =>
        <>
        <img key={artist.id} src={artist.images[0].url} className="w-24 h-24"></img>
        <p>{artist.name}</p>
        </>
        )}
    </div>
  )
}
