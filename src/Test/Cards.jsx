import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function Cards(){
    const data = useLocation();
    const event = data.state
    
    const[arr,setArr]=useState([])
    
    useEffect(()=>{
        setArr(event)
    },[])
    
    var flag = false
    
    const trueChange=()=>{
        if(!flag) {
            flag = true
            setArr(event.filter((item) => item.className === "parashat"))
        }
        else {
           flag = false
           setArr(event)
        }
    }

return(<><input type="checkbox" onChange = {trueChange}></input><label>הצג פרשות שבוע בלבד</label>
            {arr.length>0 && arr.map(item=> (
                <div key={item.title}>
                    <h1>{item.title}</h1>
                    <div>{item.className}</div>
                </div>
    ))}
    </>)}

// return(<><input type="checkbox" onChange = {trueChange}></input><label>הצג פרשות שבוע בלבד</label>
//             {arr.length>0 && arr.map(item=> (
//                 <Dialog key={item.title}>
//                     <h1>{item.title}</h1>
//                     <div>{item.className}</div>
//                 </Dialog>
//     ))}
//         </>)}
