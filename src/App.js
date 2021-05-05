import React, { useState, useRef } from 'react';
import './App.css';

function padTime(time){
  return time.toString().padStart(2, '0');
}



export default function App() {
  const [title,setTitle]=useState("Let The Countdown Begins!!");
  const [timeLeft, SetTimeLeft]= useState(15); 
  const [isRunning, setIsRunning] = useState(false)
  let intervalRef=useRef(null); 


  function startTimer(){
    if(intervalRef.current !== null) return

    setTitle(`You're Doing Great!`);
    setIsRunning(true);
     intervalRef.current =  setInterval(() => {
          SetTimeLeft(timeLeft => {
          if(timeLeft >= 1) return timeLeft-1;

              // reset
              resetTimer();
          return 0;
          });
      }, 1000);
  }
  function stopTimer() {
    if(intervalRef.current  === null) return
    
    clearInterval(intervalRef.current);
    intervalRef.current = null
    setTitle(`Keep It Up!`);
    setIsRunning(false)
  
  }

  function resetTimer(){
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setTitle(`Ready To Go Another Round?`);
    SetTimeLeft(25*60) ;
    setIsRunning(false);
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
      {!isRunning &&  <button onClick={startTimer}>Start</button>}
       {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
