var React = require('react');

const Button = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.', props.buttonValue);
  }
  return (
    <div className="button" onClick={handleClick} >
      {props.buttonValue}
    </div>
  );
};

export default Button;