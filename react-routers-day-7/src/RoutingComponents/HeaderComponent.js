
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './About';
import Company from './Company';
import StudentRegister from './StudentRegister';
import "./Style.css"
function HeaderComponent() {
  return (
    
    <BrowserRouter>
  
<Routes>
  {/* <Route path='/' element={<div>hello world</div>}/> */}
  <Route path="/" element={<Company/>}></Route>
  <Route path="register" element={<StudentRegister />}></Route>
  <Route path="about" element={<About/>}></Route>
</Routes>
    

</BrowserRouter>
  )
}

export default HeaderComponent