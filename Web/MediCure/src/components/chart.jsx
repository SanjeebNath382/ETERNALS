import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
    labels: ['05/03/22 11:00:00', '05/03/22 13:00:00', '05/03/22 15:00:00',"05/03/22 19:00:00","06/03/22 09:00:00"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'BPM',
          data: [74,71,72,75,78],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(3, 252, 240, 0.6)',
            'rgba(255, 179, 179, 0.6)',
            'rgba(255, 204, 102, 0.6)'
          ],
          borderWidth: 1,
        }
    ]
}

function ChartD () {
    return (
      <>
      <Bar 
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "BPM"
          },
          legend: {
            display: true,
            position: "bottom"
         }
        }
      }}
      />
      </>
    )
  }

  export default ChartD;