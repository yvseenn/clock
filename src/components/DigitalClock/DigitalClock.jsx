import './DigitalClock.scss'
import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

    const [clock, setClock] = useState("00:00:00");

    useEffect(() => {
        setInterval(() => {
            
            const fechaHora = new Date();

            let horas = fechaHora.getHours();
            let minutos = fechaHora.getMinutes();
            let segundos = fechaHora.getSeconds();

            if(horas < 10) { horas = '0' + horas; }
            if(minutos < 10) { minutos = '0' + minutos; }
            if(segundos < 10) { segundos = '0' + segundos; }

            const todoJunto = `${horas}:${minutos}:${segundos}`

            setClock(todoJunto)
        }, 1000)
    }, [])

    return (
        <div className='div'>
            <p className='div__titulo'>DIGITAL CLOCK</p>
            <p className='div__clock'>{clock}</p>
        </div>
    )
}

export default DigitalClock