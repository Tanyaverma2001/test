import Chart from 'react-apexcharts';
import "./index.css";

import React from 'react';
function Donut(){
    return(<React.Fragment>
        <div className='chart'>
        <div className='container-fluid mt-3 mb-3'>
        <Chart type='donut'
        width={320}
        height={200}
        
      
        series={[20,12,10,2]}
        options={{
            labels:['Accept','Avoid','Mitigate','Transfer'], plotOptions:{
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
        </div>
        </React.Fragment>);

}
export default Donut;