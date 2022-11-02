
import React from 'react'

 function Display(props) {

console.log(props)
  return (
    <div>Display
       <table id="stdtable">
            <thead>
                <tr><th>Student Name</th>
                <th>Student Id</th>
                <th>Student Age</th>
                <th>Student Branch</th>
               </tr>
            </thead>
            <tbody>
                {props.files.map((items)=>{
                    return <tr key={items.studentId}><td>{items.studentName}</td><td>{items.studentId}</td><td>{items.studentAge}</td><td>{items.studenetBranch}</td></tr>
                })}
            </tbody>
          </table>
       
    </div>
    
  )
}
export default Display