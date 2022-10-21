import "./App.css";
//import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextBox from "./componenets/TextBox";
import React, { useState } from "react";
import Alert from "./componenets/Alert";

function App() {
  var [mode, setMode] = useState("light");
  var [alert, setAlert] = useState(null);

  var showAlert = (_message, _type) => {
    setAlert({
      message: _message,
      type: _type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      showAlert("Dark mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextBox heading="Text Utilities" showAlert={showAlert} mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
