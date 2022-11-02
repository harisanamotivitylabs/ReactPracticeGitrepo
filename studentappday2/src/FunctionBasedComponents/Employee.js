import { useState } from "react"
import React from 'react'

function Employee() {

    var [employee] = useState({
        name: "",
        age: "",
        branch: ""
    });
    
    var emps=[];
    function save(event){
        event.preventDefault()
         emps.push(employee)
         console.log(emps)
    }
    return <>
       
        Name : <input type="text"  onChange={(e)=>employee.name=(e.target.value)}/>
        Age : <input type="text"  onChange={(e)=>employee.age=(e.target.value)}/>
        Branch :<input type="text"  onChange={(e)=>employee.branch=(e.target.value)}/>
     <button onClick={(e)=>save(e)}>save</button>
     
     <div>
       
     </div>
     </>
    
}
export default Employee