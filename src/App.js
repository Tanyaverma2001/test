import React from "react";

import Header from "./component/Header"
import Search from "./component/Search"
import Riskprofile from "./component/Riskprofile"
import Recomn from "./component/Recomn";
import Risk from './component/Risk';
import "./styles/styles.scss" ;
import "./styles/react-styles.scss";
import "./styles/common-styles.scss";

function App(){
 document.body.className="dark-theme";
  return( <>
 
  <div className="andromeda-page-main-container">
  <Header/>
  <Search/>  
  <Riskprofile/>
  <Recomn/>
  <Risk/>
  </div>
  </> ) ;

}
export default App;