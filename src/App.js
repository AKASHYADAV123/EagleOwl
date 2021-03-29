import React from "react";
import './App.css';
import Top from './Top';
import Down from './Down';



function App() {  
  return (
    <div className='box1'>      
        <div className="hmr">
          <div className="topbox">  
            High Margin Recipes          
              <Top />                       
          </div>

          <div className="topbox">  
            Low Margin Recipes          
              <Top />                          
          </div>

          <div className="topbox">  
            Top Fluctuating Recipes          
              <Top />                
          </div>

        </div>  
    <div className="lmr"></div>       
    <Down/>  
  </div>  
  );
}

export default App;
