import SemiCircleProgressBar from "react-progressbar-semicircle";
import React, { Component } from "react";
import './index.css';
 

 
class Progress extends Component {
  render() {
   return <SemiCircleProgressBar percentage={50} showPercentValue />; 
  }
}
export default Progress;