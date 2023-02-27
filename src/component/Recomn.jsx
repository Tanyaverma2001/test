import React from 'react';
import './index.css';
import DoughnutChartDemo from './DoughnutChartDemo';
import Doughn from './Doughn'
import Donut from './Donut';

function Recomn (){return(
    <div className='row3'>
    <div className='.andromeda-card'>
        <h3 style={{ "padding-left":"15px", "padding-top":"15px"
        }}>Recommendations</h3>
        <div className='r1'><p>It has been 324 days since your last pen test
               </p></div>
               <div className='r1'><p>It has been 324 days since your last pen test
               </p></div>
               <div className='r1'><p>It has been 324 days since your last pen test
               </p></div>
       
</div>

<div className='.andromeda-card'>
        <h3 style={{ "padding-left":"15px", "padding-top":"15px", 
        }}>Residual Risk by Source Type</h3>
      <Donut/>
       </div>

        
<div className='.andromeda-card'>
        <h3 style={{ "padding-left":"20px", "padding-top":"1px"
        }}>Action Plans</h3>
        
        <Doughn/>
        </div>
        </div>)}
        export default Recomn;