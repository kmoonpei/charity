import React, { Component } from 'react';
import logo from './logo.svg';
import logo1 from './material/logo1.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
        </header>
        {/* <div className=""></div> */}
        <div className="center-part">
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
