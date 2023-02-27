import React from 'react';
import './index.css';


function Header (){
    return(
    <div className='header andromeda-page-main-container'><h1> Risk Management</h1> 
    <div className='icon'>
    <i class="pi pi-list" style={{"padding-right":"10px"}}></i>
    <i class="pi pi-bell" style={{"padding-right":"10px"}}></i> 
    <i class="pi pi-question-circle" style={{"padding-right":"10px"}}></i>
    <i class="pi pi-user"style={{"padding-right":"10px"}}></i> </div>
    </div>);
}
export default Header;