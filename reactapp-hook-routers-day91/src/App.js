import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './RouteComponents/Home';
import About from './RouteComponents/About';
import Company from './RouteComponents/Company';
import Contact from './RouteComponents/Contact';
import Header from './RouteComponents/Header';

function App() {
  useEffect(()=>{

    document.title=" motivity labs"

  })
  return (
    <div className="App">
    <BrowserRouter>
         <Header/>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/company' element={<Company />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}
export default App;
