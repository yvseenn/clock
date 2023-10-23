import './Countdown.scss'
import React, { useEffect, useState } from 'react'

const Countdown = () => {

    const[time, setTime] = useState("");
    const[date, setDate] = useState("");

    const handleInputChange = ({target}) => {
        setDate(new Date(target.value));
        setTime();
    }

    useEffect(() => {
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = date - now;


            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            
            if (distance < 0) {
                clearInterval(x);
                setTime("COUNTDOWN FINISHED");
              }
        }, 1000);
        return () => {
            clearInterval(x);
        }
    }, [date])

    return (
        <div className='div'>
            <p className='div__titulo'>COUNTDOWN</p>
            <input className='div__input' type='date' value={date} onChange={handleInputChange}></input>
            <p className='div__clock'>{time}</p>
        </div>
    )
}

export default Countdown

