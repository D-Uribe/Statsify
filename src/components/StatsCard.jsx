import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ArtistPresence } from "./ArtistPresence";

export const StatsCard = ({info, tunes, creators, artistFrequency}) => {

  return (
    <>
    <div className="flex flex-col items-center text-center">
      <h1>Statsify</h1>
      <p>{info?.display_name}'s Music Stats</p>
      <div>
        <p>#1 Track</p>
        <img src={tunes?.items[0].album.images[1].url} className="w-32 h-32 object-cover rounded-xl"></img>
        <p>{tunes?.items[0].artists[0].name} - {tunes?.items[0].name}</p>
      </div>
      <div>
        <p>#1 Artist</p>
        <img src={creators?.items[0].images[1].url} className="w-28 h-28 rounded-full object-cover"></img>
        <p>{creators?.items[0].name}</p>
      </div>
      <div className="w-72">
        <ArtistPresence artistFrequency={artistFrequency}></ArtistPresence>
      </div>
      </div>
      
    
    
    
    
    </>
  )
}
