import './Stopwatch.scss'
import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className='div'>
      <p className='div__titulo'>STOPWATCH</p>
      <p className='div__clock'>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </p>
      <div className='div__botones'>
        {!timerOn && time === 0 && (<button className='div__botones--boton' onClick={() => setTimerOn(true)}>START</button>)}
        {timerOn && <button className='div__botones--boton' onClick={() => setTimerOn(false)}>PAUSE</button>}
        {!timerOn && time !== 0 && (<button className='div__botones--boton' onClick={() => setTimerOn(true)}>RESUME</button>)}
        {time !== 0 && <button className='div__botones--boton' onClick={() => setTime(0)}>RESET</button>}
      </div>
    </div>
  );
};

export default Stopwatch;
