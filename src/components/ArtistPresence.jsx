import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export const ArtistPresence = ({ tunes }) => {



   const artistNames =  tunes?.items.slice(0,10).map(song => song.artists[0].name)

   const artistFrequency = artistNames?.reduce(getMax,{})
   
   function getMax(acc,val){
    acc[val] ??= 0;
    acc[val] +=1;
    return acc;
   }


   const prueba = JSON.stringify(artistFrequency)
   const keys = artistFrequency ? Object.keys(artistFrequency) : []
   const values = artistFrequency ? Object.values(artistFrequency) : []


const data = {
    labels: keys,
    datasets: [
      {
        label: "Artist Presence",
        data: values,
        backgroundColor: [
          "#1DB954",
          "#1ed760",
          "#169c46",
          "#0f7a36",
          "#535353"
        ],
        borderWidth: 2,
        borderColor: "#121212",
      }
    ]
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          usePointStyle: true,
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.raw} track(s)`;
          }
        }
      }
    }
  };

   return (
    <div className="w-full max-w-md">
      <h2>Artist Presence</h2>
      <p>Artists appearing most frequently in your Top 10 tracks</p>

      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
};
