import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetRange(){
    const nevigate=useNavigate()
    const[event,setEvent]=useState([])
    const[start,setStart]=useState("")
    const[end,setEnd]=useState("")

    async function fetchData(){
        const resualt = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&?start=${start}&?end=${end}`)
        const data = await resualt.json()
        setEvent(data)
}
    // useEffect(()=>{
    //     fetchData()
    // },[])

    const a=()=>{
        fetchData()
        nevigate('/cards',{state:event})
    }
    
    return(<><input type="date" onChange={(e)=>{setStart(e.target.value)}} placeholder="enter start date"></input>
             <input type="date" onChange={(e)=>{setEnd(e.target.value)}} placeholder="enter end date"></input> 
             <button onClick={()=>{a()}}>cards</button>    
           </>)
}