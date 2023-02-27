import React from 'react';
import './index.css';

function Search (){return(
<div className='.andromeda-card'>
<div className="search-bar">
    
  <input type="text" placeholder="Search"
   />  
   <button className='srchbtn'> Search</button>
  
 


<div class="dropdown">
  <button class="dropbtn">Threat Agent</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
  </div>

  
<div class="dropdown">
  <button class="dropbtn">Action Plan </button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
  </div>

  
<div class="dropdown">
  <button class="dropbtn">Assignee</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
  </div>
</div>
    
</div>
    );
    
}
export default Search;