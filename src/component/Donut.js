import Chart from 'react-apexcharts';

import React from 'react';
function Donut(){
    return(<React.Fragment>
        <div className='container-fluid mt-3 mb-3'>
        <Chart type='donut'
        width={360}
        height={200}
        margin-top={20}
        series={[20,12,10,2]}
        options={{
            labels:['Accidental','Adversarial','Environmental','Structural'],
            datasets:[{
                backgroundColor: 'rgba(53,90,13,0.5)'
            }],
            plotOptions:{
                pie:{donut:{labels:{show:true,total:{show:true,}}

            }}
            } , dataLabels:{
                enabled:false,
                style:{
                    colors: ['#F44336', '#E91E63']

                }
            }
        }}/>
        </div>
        </React.Fragment>);

}
export default Donut;