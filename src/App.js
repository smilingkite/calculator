import React, { Component } from 'react';
import Button from './components/button';
import './App.css';
var math = require('mathjs-expression-parser')

var value = "";

function checkDoubleOperators(value){
  switch (value.slice(-1)) {
    case '+':
    case '-':
    case '/':
    case '*':
    value = value.slice(0,-1)
      break;
    default:
      break;
  }
  return value
}

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
      case '=':
        if (value.lastIndexOf('(') > value.lastIndexOf(')')) { 
          value = value + ')'
        }
        try {value = String(math.eval(value));}
        catch(error) {
          console.error(error)
        }
        break;
      case 'C':    
        value = ""
        break;
      case 'X':
        value = checkDoubleOperators(value);
        value = value + '*'
        break;
      case 'back':
        value = value.slice(0, -1); 
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
      case '+':
      case '-':
      case '/':
        value = checkDoubleOperators(value);
        value = value + e.value
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
            <Button key={i} buttonValue={value} className="button" onClick={() =>
              this.handleClick({value})}>
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
