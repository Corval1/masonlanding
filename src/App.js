import reaperlogo from './assets/rwy.png';
import './App.css';
import React, { Component } from 'react';
import FancyButton from './components/FancyButton';
import MasonFooter from './components/MasonFooter'
import MasonHeader from './components/MasonHeader';
import MasonBody from './components/MasonBody';

function App() {

  const displayBody = () => {
    
    let body;
      body = (      
        <MasonBody></MasonBody>
      )

      return (
        <div>
          <div>
            <MasonHeader></MasonHeader>
          </div>
            {body}
          <div>
            <MasonFooter></MasonFooter>
          </div>  
        </div>)
    }

  return (
    <div className="App">
      {displayBody()}
    </div>
  );
}

export default App;
