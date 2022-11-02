import React from 'react'
import ComponetChild from './ComponetChild'


export const UserContext=React.createContext()
function UseContextEx() {

  return (
    <div><h1>UseContextEx
    </h1>
      <UserContext.Provider value="hari"><ComponetChild /></UserContext.Provider>
      
    </div>
  )
}

export default UseContextEx