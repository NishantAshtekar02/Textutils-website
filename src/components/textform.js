import React, { useState } from "react";

export default function Textform(props) {
  const handlerupperclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handlerlowclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handlerspeak = () => {
    // console.log("Uppercase was clicked" + text);
    let msg = new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
  };

  const handleonchange = (event) => {
    console.log("onchange");
    settext(event.target.value);
  };
  
  const [text, settext] = useState("");
  //text="ajnfoiauwndiwa"      wrong way to change text
  //settext("enter text");      correct way to change text

  return (
    <>
      <div className="container my-3" style={{color :props.mode==="dark" ? "white":"#191a1c"}}>
        <h2 style={{color :props.mode==="dark" ? "white":"black"}} >{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==="dark" ? "#191a1c":"white", color :props.mode==="dark" ? "white":"black"}} id="myarea" rows="7" ></textarea>
      </div>
      <button className="btn-primary mx-2 my-2" onClick={handlerupperclick}>
        Convert to uppercase
      </button>
      <button className="btn-primary mx-2 my-2" onClick={handlerlowclick}>
        Convert to lowercase
      </button>
      <button className="btn-primary mx-2 my-2" onClick={handlerspeak}>
        speak
      </button>

      <div className="container my-4" style={{color :props.mode==="dark" ? "white":"black"}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
