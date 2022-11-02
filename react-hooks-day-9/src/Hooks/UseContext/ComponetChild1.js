import React from 'react'
import ComponetChild2 from './ComponetChild2'

function ComponetChild1(props) {
  return (
    <div>ComponetChild1 {props.name}
        <ComponetChild2 name={props.name}/>
    </div>
  )
}

export default ComponetChild1