import React, { useState } from 'react';
import './App.css';

function padTime(time){
  return time.toString().padStart(2, '0');
}

export default function App() {
  const [title,setTile]=useState("Let The Countdown Begins!!");
  const [timeLeft, SetTimeLeft]= useState(10);  


  function startTimer(){
      setInterval(() => {
          SetTimeLeft(timeLeft => {
          if(timeLeft >= 1) return timeLeft-1;

              // reset
          return 0;
          });
      }, 1000);
  }

  function resetTimer(){
    SetTimeLeft();
  }
 
  const minutes=padTime(Math.floor(timeLeft/60));
  const seconds=padTime(timeLeft-minutes*60);
  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
