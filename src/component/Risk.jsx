import React from 'react';
import './index.css';
import  StripedRows from './StripedRows';


function Risk (){return(
    <div className='row4'>
    <div className='Risk'>
        <h3 style={{ "padding-left":"15px", "padding-top":"15px"
        }}>Risk</h3>

       <div className='btn'><button className='anr'> Add new Risk</button>
       </div>   <StripedRows/>   </div>
       
        </div>)};
export default Risk;