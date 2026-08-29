export const ArtistPresence = ({ tunes }) => {

    
   const artistNames =  tunes?.items.slice(0,10).map(song => song.artists[0].name)

   artistNames.reduce(getMax,{})
   
   function getMax(acc,val){
    acc[val] ??= 0;
    acc[val] +=1;
    return acc;
   }

  return (
    <div>
      {console.log(array)}
    </div>
  )
}
