import React, { Component } from 'react';
import math from 'mathjs'; 
import Button from './components/button';

import './App.css';

var value = "";

class App extends Component {
  buttonValues = [
    'C', '/', 'X','back',
    7,8,9,'-',
    4,5,6,'+',
    3,2,1,'()',
    0,'.','+/-','='
  ]

  constructor(props) {
    super(props);
    this.state = {
      value: value,
    };
  }

  handleClick(e){
    switch(e.value) {
      case 'C':    
        value = ""
        break;
      case 'X':
        value = value + '*'
        break;
      case 'back':
        value = value.slice(0, -1); 
        break;
      case '=':
        value = String(math.eval(value));
        break;
      case '()':
        if (value.lastIndexOf('(') > value.lastIndexOf(')')) {
          value = value + ')'
        } else {
          value = value + '('
        }
        break;
      case '+/-':
        if (value[0]=== '-') {
          value = value.substring(1);
        } else {
          value = '-' + value;
        }
        break;
      default:   
        value = value + e.value
    }
    this.setState({ value: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Calculator</h1>
          <p className="calculation ">{this.state.value}</p>
        </header>
        <div className="calculator">
          {this.buttonValues.map((value, i) =>
            <Button key={i} buttonValue={value} className="button"  onClick={() =>
              this.handleClick({value})}>
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
