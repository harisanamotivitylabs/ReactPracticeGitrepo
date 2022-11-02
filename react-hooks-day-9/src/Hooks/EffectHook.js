

import React, { useEffect, useState } from 'react'

function EffectHook() {

    const[users,setUsers]=useState([])

    const[loading,setLoading]=useState(true)

    useEffect=()=>{
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{res.json()}).then(result=>{
            setUsers(result)
        })
    ,[]}
    console.log(users)
  return (
    <div>EffectHook
        <h1>{loading}</h1>
        <h1>{users}</h1>
    </div>

  )
}

export default EffectHook

