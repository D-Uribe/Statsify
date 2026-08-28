
export const TopArtists = ({ creators }) => {
  return (
    <div>
        {creators?.items.slice(0,5).map(artist =>
        <>
        <img src={artist.images[0].url}></img>
        <p>{artist.name}</p>
        </>
        )}
    </div>
  )
}
