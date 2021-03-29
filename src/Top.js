import React from "react";
import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Top(props){
    const percentage1 = 82;
    const percentage2 = 91;
    const percentage3 = 75;
    return(
    <div>      
    <div className="low1">   
        <p>Ambur Biryani</p>
        <p>Paneer Tikka masala</p>
        <p>Palak pannerr </p>        
    </div> 
    <div className="lowbox">        
        <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
        <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
    </div>  
    </div>
    );
}

export default Top;