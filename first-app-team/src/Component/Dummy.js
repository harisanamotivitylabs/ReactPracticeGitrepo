import React,{useState} from 'react'
import UseEffectEx from './UseEffectEx'


function Dummy() {
    const [show,setShow]=useState(true)
  return (
   
    <div>Dummy
         <button onClick={()=>{setShow(!show)}}>show</button>
         {show&&<UseEffectEx/>}
    </div>
  )
}

export default Dummy