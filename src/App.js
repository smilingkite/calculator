import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Calculator</h1>
          <p className="calculation "></p>
        </header>
        <div className="calculator">

              <div className="button ">C</div>
              <div className="button ">/</div>
              <div className="button ">X</div>
              <div className="button ">back</div>

              <div className="button ">7</div>
              <div className="button ">8</div>
              <div className="button ">9</div>
              <div className="button ">-</div>

              <div className="button ">4</div>
              <div className="button ">5</div>
              <div className="button ">6</div>
              <div className="button ">+</div>

              <div className="button ">3</div>
              <div className="button ">2</div>
              <div className="button ">1</div>
              <div className="button ">()</div>

              <div className="button ">0</div>
              <div className="button ">.</div>
              <div className="button ">+/-</div>
              <div className="button ">=</div>

        </div>
      </div>
    );
  }
}

export default App;
