import { useState, useEffect } from "react";
import { types } from "react-bricks";
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import { Image } from "react-bricks";
  import {Link} from "react-scroll"
import Linker from "next/link";





const Navbar: types.Brick = () => {
  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    const logo = require('./images/logo.jpg');

  return (
    //bagga bassi//
    
    <div className='header'>
    <nav className='navbar'>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>

        <li className='navTitle'>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>IEEEMUJ.</Link>
            </li>
          <div className="navContent">
            <li className='nav-item'>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HOME</Link>
            </li>
            <li className='nav-item'>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>ABOUT</Link>
            </li>
            <li className='nav-item'>
                <Link to="demo" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>DEMO</Link>
            </li>
            <li className='nav-item'>
                <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>FAQS</Link>
            </li>
            
            </div>
            <div className="Login"><button className="loginBTN"><Linker href="/claim">Login</Linker></button></div>
            {/* <div className="design"></div> */}
            
        </ul>
    </nav>
</div>
  );
};


Navbar.schema = {
  name: 'navbar',
  label: 'navbar',
  sideEditProps: [],
}


export default Navbar;