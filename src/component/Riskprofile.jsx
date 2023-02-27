import React from 'react';
import './index.css';
import AreaChart from './AreaChart';
import Progress from './progress';


function Riskprofile (){return(
  
    <div className='row3'>
          <div className='.andromeda-card'>
        <h3 style={{ "padding-left":"15px", "padding-top":"15px"
        }}>Risk Profile</h3>
 <Progress/>
</div>
<div className='rt'>
<h3 style={{ "padding-left":"15px", "padding-top":"0.2px"
        }}>Risk Trend</h3>
<AreaChart/>

    </div>
    </div>)};
    export default Riskprofile;