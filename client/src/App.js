import React, { Component } from 'react';
import raklogo from './raklogo.png';
import './App.css';

import Advertisers from './components/Advertisers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={raklogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rakuten Marketing</h1>
        </header>
        <Advertisers />
      </div>
    );
  }
}

export default App;
