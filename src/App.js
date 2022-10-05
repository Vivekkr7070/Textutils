import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';
import './App.css';
import { useState } from 'react';
// import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {   
  const [alert,setAlert]=useState(null);
  
  const showAlert =(message,type)=>{ 
    setAlert ({
      msg:message,
      typ:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500); 
}
  return (
    <>

     {/* <BrowserRouter> */}
     <Navbar title="texttutials" search="find" />
     <Alert alert={alert} />
     {/* <Routes> */}
     {/* <Route exact path="/" element={ */}
     <TextForm  heading="Enter your text for playing functions" showAlert={showAlert} /> 
    
     {/* <Route exact path="/" element={<TextForm  heading="Enter your text for playing functions"  /> } /> */}
           
       
      {/* </Routes>
    </BrowserRouter> */}

      </> 
  );
}  
export default App;
  