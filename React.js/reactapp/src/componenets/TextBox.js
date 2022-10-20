import React, { useState } from "react"; //added hook for useState
import PropTypes from "prop-types";

export default function TextBox(props) {
  //declared statevariable called "text" with detault value "Enter text here..." and when we change the value it'll update state
  const [text, setText] = useState("Enter text here...");
  //const [count, setCount] = useState(0); //decalred count with value 0
  const onTextChanged = (e) => {
    setText(e.target.value);
  };
  const onUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onTextChanged}
            id="myTextBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={onUppercaseClick}>
          {props.buttonText}
        </button>
      </div>
      <div className="container">
        <p>Total {text.split(" ").length} words and {text.length} characters will take approximately {0.008 * text.split(" ").length} minutes to read whole text.</p>
      </div>
    </>
  );
}

TextBox.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextBox.defaultProps = {
  heading: "Enter your text below",
  buttonText: "Convert to Uppercase",
};
