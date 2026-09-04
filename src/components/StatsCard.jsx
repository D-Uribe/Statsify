import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ArtistPresence } from "./ArtistPresence";

export const StatsCard = ({info, tunes, creators, artistFrequency}) => {

//console.log(tunes?.items[0]);
//console.log(tunes?.items?.[0])
  //    console.log(creators?.items?.[0])
  console.log(creators?.items[0])
  return (
    <>
      <h1>Statsify</h1>
      <p>{info?.display_name}'s Music Stats</p>
      <div>
        <p>#1 Track</p>
        <img src={tunes?.items[0].album.images[0].url}></img>
        <p>{tunes?.items[0].artists[0].name} - {tunes?.items[0].name}</p>
      </div>
      <div>
        <p>#1 Artist</p>
        <img src={creators?.items[0].images[0].url}></img>
        <p>{creators?.items[0].name}</p>
      </div>
      <div>
        <ArtistPresence artistFrequency={artistFrequency}></ArtistPresence>
      </div>
      
    
    
    
    
    </>
  )
}
