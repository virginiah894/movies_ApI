import React from "react";
import { useState, useEffect } from "react";

const RightSide =()=>{
    const[counterA,setCounter] = useState(0);
    useEffect(()=>{
        setCounter(120);
    },[]);
    const Person =(props)=>{
        return (
            <>
            <h1>Name:{props.name}</h1>
            <h2>Last Name:{props.last}</h2>
            <h2>Age:{props.age}</h2>
            </>
            
            
        )
    }

    return (
        <div className="Rghtside">
            
           
            <Person name= "Perry"
            last="Hans"
            age= {90} />
            <Person name ={'Goy'}
            last={"Patne"}
            age={50}/>
            <Person age ={40}
            last={"Band"}
            name={"Kate"}/>
             
            
            <button onClick={()=>setCounter((prevCounterA)=>prevCounterA +1)}>Add</button>
            <h1>{counterA}</h1>
            <button onClick={()=>setCounter((prevCounterA)=>(prevCounterA-1))} >Minus</button>

        </div>
    );
    

}
export default RightSide;