import React from "react"
import {NavLink as Link } from "react-router-dom"

function Header() {

    const Arr=[
        {
        name:'dashbord',
        to:'/home'
    },{
        name:'hello',
        to:'/about'
    },{
        name:'hello',
        to:'/about'
    },
    {
        name:'hello',
        to:'/about'
    }
]


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="navbar-nav">
                    <h2>Motivity</h2>
                </div>
                <div className="navbar-nav">
                    <Link className="navbar-brand" to="/home" activeClassName="active">Home</Link>
                </div>
                
                <div className="navbar-nav nav-light nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/company"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">Company</Link>
                   
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li> <Link className="dropdown-item" to="/about" activeClassName="active">Register</Link></li>
                        <li> <Link className="dropdown-item" to="/about" activeClassName="active">Login</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                       
                    </ul>
                </div>
                <div className="navbar-nav">
                    <Link className="navbar-brand" to="/about" activeClassName="active">About Us</Link>
                </div>
                <div className="navbar-nav">
                    <Link className="navbar-brand" to="/contact" activeClassName="active">Contact Us</Link>
                </div>
                {
                    Arr.map((item)=>{
                        return(
                            <>
                            <Link className="navbar-brand" to={item.to} activeClassName="active">{item.name}</Link>
                            </>
                        )
                    })
                }

            </nav>

        </div>
    )
}

export default Header