import "./App.css";
import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextBox from "./componenets/TextBox";

function App() {
  return (
    <>      
      <Navbar title="Text Utils" />
      <div className="container my-3">
        <TextBox heading="Text Utilities" />
      </div>
      <About />
    </>
  );
}

export default App;
