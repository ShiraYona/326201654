import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

function Date() {
    const navigate = useNavigate();
    
    const go = (start,end) => {navigate('/special',{state:{s:start,e:end}})}
    
    const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
    return (
      <div >
       <input onChange={e=>{setStart(e.target.value)}}  placeholder="start"></input>
       <input onChange={e=>{setEnd(e.target.value)}}  placeholder="end"></input>
       <button onClick={()=>{go(start,end)}}>go</button>
      </div>
    );
  }
  
  export default Date;