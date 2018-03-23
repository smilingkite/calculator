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
          <table className="tg">
            <tr>
              <td className="button ">C</td>
              <td className="button ">/</td>
              <td className="button ">X</td>
              <td className="button ">back</td>
            </tr>
            <tr>
              <td className="button ">7</td>
              <td className="button ">8</td>
              <td className="button ">9</td>
              <td className="button ">-</td>
            </tr>
            <tr>
              <td className="button ">4</td>
              <td className="button ">5</td>
              <td className="button ">6</td>
              <td className="button ">+</td>
            </tr>
            <tr>
              <td className="button ">3</td>
              <td className="button ">2</td>
              <td className="button ">1</td>
              <td className="button ">()</td>
            </tr>
            <tr>
              <td className="button ">0</td>
              <td className="button ">.</td>
              <td className="button ">+/-</td>
              <td className="button ">=</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
