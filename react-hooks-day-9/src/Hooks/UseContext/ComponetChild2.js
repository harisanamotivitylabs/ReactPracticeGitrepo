import React from 'react'
import { UserContext } from './UseContextEx'
function ComponetChild2(props) {
  return (
    <div>ComponetChild2 {props.name}
    <UserContext.Consumer>
        {
            user=>{return <h1>context value{user}</h1>}

            
        }
    </UserContext.Consumer>
    
    </div>
  )
}

export default ComponetChild2