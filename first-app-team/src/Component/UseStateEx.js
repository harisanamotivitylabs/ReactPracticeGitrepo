
import React, { useState } from 'react'

function UseStateEx() {

    const[count,setCount]=useState(0)

    const [color,setColor]=useState("red")

    const increment=()=>{
        setCount(count+1)
        setColor('blue')
       
    }
    const decrement=()=>{
        setCount(count-1)
        setColor('red')
       

    }
    const setZero=()=>{
      setCount(0)
     
    

  }

  return (
    <div>
        <h1 style={{color:color}}>Counter</h1>
        <h2 style={{color:color}}>{count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={setZero}>setZero</button>
        <button onClick={decrement}>decrement</button>



      
    </div>
  )
}

export default UseStateEx