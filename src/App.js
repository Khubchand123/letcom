
// import React,{useState}  from "react"
// import './App.css';
// import Section from "./component2/Section";
// import useToggle from "./component2/hooks/useToggle";
// import StopWatch from "./component2/StopWatch";


// function App() {

//     //  const [smileyface, isSmileyFace] =  useState(true);

//     //  const [section , updateSection] =  useToggle(true);
   

//   return (

//     <StopWatch/>
//     // <div >

     

//     //   { section && <Section /> }

//     //   <p style={{textAlign:"center"}}><button onClick={()=> updateSection()} > Read More</button></p>

//     //   <h1 style={{textAlign:"center"}} onClick={()=> isSmileyFace(!smileyface)}>  { (smileyface) ? "😂" : "🦍 " }  </h1>


//     // </div>
     
  
//   );
// }

// export default App;










import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from "./components/Notess"
import Home from "./components/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dialog from "./components/Dialog"
import ShoppingList from './component1/ShoppingList';
import Section from './component2/Section';
import Recoder from './components/Recoder';
import Speaking from './component4/Speaking';
function App() {
  const [fScreen,setFScreen] = useState(0);
    document.addEventListener("dblclick",()=>{
        if(fScreen==0){
            document.body.requestFullscreen();
            setFScreen(1);
        }
        else{
            document.exitFullscreen();
            setFScreen();
        }
    })
  return (
    // <Recoder/>
    // <Section />
    // <ShoppingList />
    // <Dialog />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    // <Speaking/>
  );
}
export default App;
