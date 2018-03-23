import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Calculator</h1>
        </header>
        <table class="tg">
          <tr>
            <th class="tg-yw4l">C</th>
            <th class="tg-yw4l">/</th>
            <th class="tg-yw4l">X</th>
            <th class="tg-yw4l">back</th>
          </tr>
          <tr>
            <td class="tg-yw4l">7</td>
            <td class="tg-yw4l">8</td>
            <td class="tg-yw4l">9</td>
            <td class="tg-yw4l">-</td>
          </tr>
          <tr>
            <td class="tg-yw4l">4</td>
            <td class="tg-yw4l">5</td>
            <td class="tg-yw4l">6</td>
            <td class="tg-yw4l">+</td>
          </tr>
          <tr>
            <td class="tg-yw4l">3</td>
            <td class="tg-yw4l">2</td>
            <td class="tg-yw4l">1</td>
            <td class="tg-yw4l">()</td>
          </tr>
          <tr>
            <td class="tg-yw4l">0</td>
            <td class="tg-yw4l">.</td>
            <td class="tg-yw4l">+/-</td>
            <td class="tg-yw4l">=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
