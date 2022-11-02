
import React, { useState } from 'react'


function StudentRegister() {

    const [state, setState]=useState(
        {
            studentName:'',
            studentId:'',
            studentAge:'',
            studenetBranch:''
        }
        
    )
    const [studentfile,setStudentfile]=useState([])

function handelChange(event)
{
    setState(e=>{return{...e,[event.target.name]:event.target.value}})

}
function saveStudent()
{
    setStudentfile(student => [...student, state])

    console.log(studentfile)
}

  return (<React.Fragment>
   
        <form >
        <table>
            <tbody>
            <tr><td><label>Student Name   :</label></td>
            <td><input type="text"  name="studentName" value={state.studentName}   onChange={handelChange} /></td></tr>
            <tr><td><label>Student Id   :</label></td>
           <td> <input type="number"  name="studentId" value={state.studentId} onChange={handelChange}  /></td></tr>
            <tr><td> <label>Student Age  :</label></td>
            <td><input type="number"  name="studentAge" value={state.studentAge} onChange={handelChange}  /></td></tr>
            <tr><td><label>Student Branch  :</label></td>
            <td><input type="text"  name="studenetBranch" value={state.studenetBranch} onChange={handelChange} /></td></tr>
         
          <tr><td><input type="button" value="save" onClick={saveStudent}/></td></tr>
          </tbody>
        </table>
        </form>
    </React.Fragment>)
}

export default StudentRegister