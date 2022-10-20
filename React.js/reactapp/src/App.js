import "./App.css";
import Navbar from "./componenets/Navbar";
import TextBox from "./componenets/TextBox";

function App() {
  return (
    <>      
      <Navbar title="Text Utils" />
      <div className="container my 3">
        <TextBox heading="Enter text" />
      </div>
    </>
  );
}

export default App;
