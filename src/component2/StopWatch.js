import React,{useState} from 'react'

const StopWatch = () => {
    const [timer,setTimer]=useState(0);
    const [min,setMin]=useState(0);
    const [id,setid] = useState(0);
    const startTimer=()=>{
        setTimer(0);
        clearInterval(id);
        const k=setInterval(() => {
            setTimer(khubchand=>khubchand + .01);
            if(timer.toFixed(0)==60){
                setTimer(0);
                setMin(min+1);
            }
        }, 10);
        setid(k);
    }
    const stopTimer=()=>{
        clearInterval(id);
        // setTimer(0);
        
    }
  return (
    <div style={{textAlign:"center"}}>
        <p>Timer{min}:{timer.toFixed(2)}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
    </div>
  )
}

export default StopWatch;
