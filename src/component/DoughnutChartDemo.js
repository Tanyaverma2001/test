
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import './index.css';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);

        const dummyData = [
            {
              id: 1,
              name: "Accidental",
              number: 22,
            },
            {
              id: 2,
              name: "Advertisement",
              number: 12,
            },
            {
              id: 3,
              name: "Sturctural",
              number: 10,
            },
            {
              id: 4,
              name: "Enviromental",
              number: 2,
            },
          ];
      
      const data = {
        labels: ['Accidential', 'Adversarial', 'Environmental','Structural' ],
       
            datasets: [
                {
                    label: "My First Dataset",
        data: [dummyData[0].number, dummyData[1].number, dummyData[2].number,dummyData[3].number],
        
                    
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--purple-500'), 
                        documentStyle.getPropertyValue('--pink-500'),
                        documentStyle.getPropertyValue('--red-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')

                    ]
                }
            ]
        };
        const options = {
            
            cutout: '70%',
            label:{ boxWidth:9,
                boxHeight: 40 ,
                usePointStyle: true,
            }, legend:{
               position:'right',
            }
           
            
        };
       
       

        setChartData(data);
        setChartOptions(options);
    },
    []);

    return (
        <div>
        <div className="card flex justify-content-center" >
            <Chart type="doughnut" data={chartData}  options={chartOptions} className="w-full md:w-30rem"  />
          
            </div>
           
        </div>
       
    )
}
        