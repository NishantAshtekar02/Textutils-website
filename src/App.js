import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
import About from "./components/about";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  
  const togglemode =()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#191a1c";
  }
  else{
    setmode("light");
    document.body.style.backgroundColor="white";
  }
}

  return (
    <>
    <BrowserRouter>
  <Navbar title="Textutils"  mode={mode} togglemode={togglemode} />
  <div className='container mt-2'>
    <Routes>
      <Route exact path="/about" element={<About mode={mode} />} />
      <Route exact path="/" element={<Textform Textform heading="Enter the text to anaylze:" mode={mode} />} />
    </Routes>
  </div>
</BrowserRouter>
   </>
  );
}

export default App;
