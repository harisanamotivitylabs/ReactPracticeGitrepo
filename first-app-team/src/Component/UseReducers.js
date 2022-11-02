import React, { useReducer } from 'react'


const intialstate=0;

const reducer=(state,action)=>{

    switch(action)
    {
        case 'increment':return state+1
        case 'decrement':return state-1
        case 'setzero':return intialstate
        default:return state
    }

}


function UseReducers() {

   const[count,dispatch]=useReducer(reducer,intialstate)

  return (
    <div><h1>UseReducers</h1>

<h1>Count--{count}</h1>
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <button onClick={()=>dispatch("setzero")}>setToZero</button>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
    </div>
  )
}

export default UseReducers