var React = require('react');

const Button = (props) => {

  const submit = e => {
    // e.preventDefault();
    // let kaart = _kaart.letters.value + _kaart.cijfers.value
    // onNewCard(kaart);
    // e.target.reset();
  };
  // const handleChange = e => {
  //   _kaart[e.target.name]= e.target.value;
  // };

  
  return (
    <div className="button">
      {props.buttonValue}
    </div>
  );
};

export default Button;