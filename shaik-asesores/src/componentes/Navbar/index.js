import React from 'react';
import { NavLink } from 'react-router-dom';
import logoShaik from '../../asset/logoShaik.png'
import { FaBars } from "react-icons/fa";

import './style.css'



const NavBar = () => {
 
    return(
        <nav className="navBar">
    <div className="navBar-container" >
        <img src={logoShaik} alt="logo"/>
        <ul className='navbar-list active'>
            <li><NavLink to="/" className='active'>Home</NavLink></li>
            <li><NavLink to="/nosotros" className='active'>Nosotros</NavLink></li>
            <li><NavLink to="/servicios" className='active'>Servicios</NavLink></li>
            <li><NavLink to="/blog" className='active'>Blog</NavLink></li>
            <li><NavLink to="/f&q" className='active'>Preguntas Frecuentes</NavLink></li>
   
        </ul>
        <FaBars className='icon active' />
        <button className=" "> ¡Cotiza ya! </button>
    </div>
</nav>
    )
}

export { NavBar}
