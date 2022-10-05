// import { clear } from '@testing-library/user-event/dist/clear';
// import App from '../App'
import React  ,{useState} from 'react'
  
export default function TextForm(props) {
const handleUpClick =()=>{
console.log("uppercase button has been clicked"+ text);
const newText = text.toUpperCase();
setText(newText)
props.showAlert("converted to uppercase","success");
}
const handleLwClick =()=>{
  console.log("uppercase button has been clicked"+ text);
  const newText = text.toLowerCase();
  setText(newText) 
  props.showAlert("converted to Lowerercase","success");
  }
  const handleClrClick =()=>{
    const newText = " ";
    setText(newText)  
    props.showAlert("you clicked to clear","danger"); 
   }  
   const handleCopy =()=>{
    const text =document.getElementById("myBox");
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text has been copied","success");
  }
   const handleExtraSpaces =()=>{
const newText=text.split(/[ ]+/)
setText(newText.join(" "))
   }

const handleOnChange=(event)=>{  
// console.log("on change");
setText(event.target.value)
}

  const [text ,setText] =useState(" ");
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" cols="15" rows="10"></textarea>
     </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLwClick}>Convert to Lowerercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClrClick}>Clear text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>remove extra space</button>
    </div>
    <div className="container2">
      <h2>your text summary</h2>
      <h4>The no of words is <b>{text.trim().split(" ").length}</b> and character is <b>{text.length} </b> </h4>
      <p>you can the above texts in {0.008 *text.split(" ").length}minutes </p>
      <p>{((text.trim().split(" ").filter(function(element)
      { return element!=="";}).length   ))} words and {text.length} character</p>
    </div>
    </>
    
  )
  //  export default About;
}
