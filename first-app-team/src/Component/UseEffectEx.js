import React, { useEffect, useState } from 'react'

function UseEffectEx() {

  const[users,setUsers]=useState()
    const[name,setName]=useState("")
   const handleChange=(event)=>{
          setName(event.target.value)
   }

//    useEffect(()=>{
// console.log("component mounted")
// return ()=>{
//     console.log("component unMounted")
// }

//      },[]);
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json =>  {
  setUsers(json)
  console.log(users)
},[])

  return (
    <div>UseEffectEx
        <input type='text' name="name" value={name} onChange={handleChange}/>
        <h1>{name}</h1>
         </div>
  )
}

export default UseEffectEx

