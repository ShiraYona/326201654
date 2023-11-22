import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";

function Special() {
    const location=useLocation();
    const se=location.state;
    const [d,setd]=useState([]);
    const [q,setq]=useState([]);
    const task= (se)=>{
        fetch('https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&x=on&mf=on&ss=on&mod=on&lg=he&s=on&start=2023-06-25&end=2023-08-06')
  .then(response => response.json())
  .then(data => {setd(data)})
  .then(console.log(d))
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });}
            useEffect(()=>{
                task()
                },[])
                const u= (r)=>{
                    if(r==true){
                        d.length>0 && d.map(i =>{return<div  key={i.id}>
           
           <div>{i.title}</div>
           <div>{i.description}</div>
       </div>})
                    }
                    
                }
    return (<div >
        {d.length>0 && d.map(i =>{return<div style={{borderWidth:"2px"}} key={i.id}>
           
           <div>{i.title}</div>
           <div>{i.description}</div>
       </div>})}
       <label>"הצג פ"ש"</label>
       <input type="checkbox" onChange={e=>{u(e.target.value)}}></input>
       </div>
       
    //     <Tabs
    //     value={value}
        
    //     variant="fullWidth"
    //     indicatorColor="secondary"
    //     textColor="secondary"
    //     aria-label="icon label tabs example"
    //   >
    //   {d.map(p => (
    //       <Tab icon={<PhoneIcon />} label="{p.title}" />
    //   ))}
    //   </Tabs>
    );
  }
  
  export default Special;
  