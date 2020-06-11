import React, {useState} from 'react';
import Display from './Display.js';

import './App.css';

export default function App() {
  let [count, setCount]=useState(0)
  let [isMorning, setMorning]=useState(false)
  return (
    <div className={`App ${isMorning? 'darkNight':''}`} >
<h3>Day Time: {isMorning? 'Night' : 'Morning'}</h3>
        <button onClick={()=>{setMorning(!isMorning)}}>Dark Mode</button>
      <br></br>
  <h1>Hello Subhan! Good Morning Dude.</h1>

  <p> <strong>What are we doing Here? </strong> </p>
  <br></br>
  <br></br>
<Display counter={count} />
  <button onClick={()=>{
     setCount(count+1)
  }}>Add Value</button>
   
  <button onClick={()=>{
    setCount(count-1)
  }}>Subtract Value</button> 
  <br></br>

    </div>
  );
}


