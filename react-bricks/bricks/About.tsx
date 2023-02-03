import { useState, useEffect } from "react";
import { types } from "react-bricks";
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import { Image } from "react-bricks";






const About: types.Brick = () => {
  return (
    <div className='about' id='about'>
    <div className='container'>
        <div className='col-2'>
            <h2>About</h2>
            <span className='line'></span>
            <p>get free nfts</p>
            {/* <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p> */}
            <button className='button'>get nft</button>
        </div>
    </div>
</div>

  );
};


About.schema = {
  name: 'about',
  label: 'about',
  sideEditProps: [],
}


export default About;