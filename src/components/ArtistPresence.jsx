import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const ArtistPresence = ({ tunes }) => {
  const artistNames = tunes?.items
    .slice(0, 10)
    .map((song) => song.artists[0].name);

  const artistFrequency = artistNames?.reduce(getMax, {});

  function getMax(acc, val) {
    acc[val] ??= 0;
    acc[val] += 1;
    return acc;
  }

  const keys = artistFrequency ? Object.keys(artistFrequency) : [];
  const values = artistFrequency ? Object.values(artistFrequency) : [];

  const data = {
    labels: keys,
    datasets: [
      {
        label: "Artist Presence",
        data: values,
        backgroundColor: [
          "#1DB954", // verde spotify
          "#9B59B6", // morado
          "#3498DB", // azul
          "#E74C3C", // rojo
          "#F39C12", // naranja
          "#1ABC9C", // turquesa
          "#E91E63", // rosa
          "#FF5722", // naranja oscuro
          "#00BCD4", // cyan
          "#8BC34A", // verde claro
        ],
        borderWidth: 2,
        borderColor: "#121212",
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.raw} track(s)`;
          },
        },
      },
      datalabels: {
        color: "white",
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = Math.round((value / total) * 100);
          return `${percentage}%`;
        },
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md">
      <p>Artists appearing most frequently in your Top 10 tracks</p>

      <Doughnut data={data} options={options} />
    </div>
  );
};
