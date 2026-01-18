import { useReducer } from "react";
import {data} from './App'
import { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Input() {
  const [count,setCount]  = useState(0)
  const  name = useContext(data)
 const useref = useRef()

   const handler = ()=>{
    setCount((pre)=>pre+1)
    
     useref.current.style.color = "red  "
   }
  return (
    <>
    <p>my name is {name}</p>
    <p ref={useref}>{count}</p>
    <button onClick={handler}>click</button>
    </>
  );
}
