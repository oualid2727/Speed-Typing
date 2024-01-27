import React, { useEffect, useState,useContext } from 'react'
import styles from "./countdownTimer.module.css"
import GlobalContext from '../Context/GlobalContext'


const CountdownTimer = ({startTime, setStartTime, setFinished}) => {
 
 const [timeLeft,setTimeLeft] = useState(10)
 const {num, updateNum}= useContext(GlobalContext);
 

 useEffect(()=>{
    //console.log(num)
    if (num == 2){
        setTimeLeft(10)
    }
  
  },[num])
  


 useEffect(()=>{

    const timer = setTimeout (() => {
        if (startTime && timeLeft > 0){
            setTimeLeft(timeLeft - 1)
        }
    },1000)

    return () => clearTimeout(timer)

 },[startTime,timeLeft])
 
 if (timeLeft <= 0 ){
    setFinished(true)
 }
 
 
    return (
    <div className={startTime? "" : "hidden"}>
        <p className={styles.timeText}>
            Time left: {timeLeft}
        </p>
    </div>
  )
}

export default CountdownTimer