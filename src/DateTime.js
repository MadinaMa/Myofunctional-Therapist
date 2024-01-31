import  React, { useState , useEffect } from 'react';
import './App.css';

export const DateTime = () => {

    let [date,setDate] = useState(new Date());
    
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }    
    });

    return(
        <div className="timeDate">
            <h6> {date.toLocaleTimeString()} </h6>
            <h6> {date.toLocaleDateString()} </h6>
        </div>
    )
}

export default DateTime;