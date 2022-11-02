
import React, { useState } from 'react'

function UseStateHook() {

    const [count,setCount]=useState(0)

    const [data,setData]=useState({
        fname:"",
        lname:""
    })
    const [file,setFile]=useState([])

   const increment=()=>{
        setCount(count+1)
        console.log(count)
    }

   function hchange(event)
    {
        setData(e=>{return{...e,[event.target.name]:event.target.value}})

    }

  function submit(event)
    {
        
        event.preventDefault();
        setFile(names=>[...names,data])
        console.log(file)


    }
  return (
    <div><h1>UseStateHook</h1>

    <h2>count == {count}</h2>
    
    <button onMouseOver={increment} >plus</button>
<h1>use state using forms </h1>
fanme<input type="text" name='fname' value={data.fname} onChange={hchange}/>
lname<input type="text" name='lname' value={data.lname} onChange={hchange}/>
<button onClick={submit}>submit</button>
<ul>
    <li>{file.fname}</li>
    <li>{file.lname}</li>
</ul>



    </div>
  )
}

export default UseStateHook