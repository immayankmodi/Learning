import "./App.css";
//import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextBox from "./componenets/TextBox";
import React, { useState } from "react";

function App() {
  var [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = '#fff';
    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#333';
    }
  };

  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextBox heading="Text Utilities" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
