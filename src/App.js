import reaperlogo from './assets/rwy.png';
import './App.css';
import React, { Component } from 'react';
import FancyButton from './components/FancyButton';
import MasonFooter from './components/MasonFooter'
import MasonHeader from './components/MasonHeader';

function App() {

  const displayBody = () => {
    let body;
      body = (      
          <body className="App-body">         
              <a href="https://reaper.farm" className="App-logo">
                <img alt="Reaper Farms" src={reaperlogo} width={250} heiight={250} />
             </a>
         </body>
        
      )
      return (
        <div>
          <div>
          <MasonHeader></MasonHeader>
          </div>
            {body}
        </div>)
    }

  return (
    <div className="App">
      {displayBody()}
      <MasonFooter></MasonFooter>
    </div>
  );
}

export default App;
