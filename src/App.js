import React, { Component } from 'react';
import Button from './components/button';

import './App.css';

class App extends Component {
  buttonValues = [
    'C', '/', 'X','back',
    7,8,9,'-',
    4,5,6,'+',
    3,2,1,'()',
    0,'.','+/-','='
  ]
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Calculator</h1>
          <p className="calculation "></p>
        </header>
        <div className="calculator">
          {this.buttonValues.map((value, i) =>
            <Button key={i} buttonValue={value} className="button">
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
