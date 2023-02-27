import React from 'react'
import { Line } from 'react-chartjs-2';
import './index.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  
  Filler,
  Legend
);
const AreaChart = () => {




  const options = {

   
    
    maintainAspectRatio: false,
    responsive: true,
    scales:{
      x:{
        display:true,
        grid:{
          display: false,
        }
      },
      y:{
        display:false,
        grid:{
          display: false,

        }
      }
    },
    elements:{
      point:{
        radius:0,
      }
    },

    plugins: {
      legend: {
        display: false,
        position: 'top' ,
      },
     
    },
  };
  
  const labels = ['Jan11', 'Feb22', 'Mar12', 'April23', 'May12', 'June14', 'July11'];
  
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        tension: .27,
        label: ["May11","June11","july10"],
        data: [70,75,50,40,50,40,20],
        
        backgroundColor:  'rgb(128,0,0)',
        
      },
    ],
  };

  return<div className='Arc'> <Line options={options} data={data}   /></div>
  
    
}

export default AreaChart


