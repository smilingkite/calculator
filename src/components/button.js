import React, { PureComponent } from 'react';

class Button extends PureComponent {
	render() {
   return (
    <div className="button" onClick={this.props.onClick}>
      {this.props.buttonValue}
    </div>
    );
  };
}

export default Button;