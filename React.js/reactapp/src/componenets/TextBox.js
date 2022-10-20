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
  const onLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const onClearClick = () => {
    setText("");
  };
  const onCopyClick = () => {
    let text = document.getElementById("myTextBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const onRemoveSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
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
        <button className="btn btn-primary mx-2" onClick={onUppercaseClick}>
          {props.btnUpperText}
        </button>
        <button className="btn btn-primary mx-2" onClick={onLowercaseClick}>
          {props.btnLowerText}
        </button>
        <button className="btn btn-primary mx-2" onClick={onClearClick}>
          {props.btnClearText}
        </button>
        <button className="btn btn-primary mx-2" onClick={onCopyClick}>
          {props.btnCopyText}
        </button>
        <button className="btn btn-primary mx-2" onClick={onRemoveSpacesClick}>
          {props.btnRemoveSpacesText}
        </button>
      </div>
      <div className="container">
        <p>
          Total {text.split(" ").length} words and {text.length} characters will
          take approximately {0.008 * text.split(" ").length} minutes to read
          whole text.
        </p>
      </div>
    </>
  );
}

TextBox.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextBox.defaultProps = {
  heading: "Enter your text below",
  btnUpperText: "Convert to Uppercase",
  btnLowerText: "Convert to Lowercase",
  btnClearText: "Clear",
  btnCopyText: "Copy",
  btnRemoveSpacesText: "Remove Spaces",
};
