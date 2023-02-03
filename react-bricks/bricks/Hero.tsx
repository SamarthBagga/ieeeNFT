import { useState, useEffect } from "react";
import { types } from "react-bricks";
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import { Image } from "react-bricks";






const Hero: types.Brick = () => {
  return (
    <div className='hero' id="hero">
    <div className='content'>
        {/* <p>Call us</p>
        <p>1-800-123-4567</p> */}
        <p>Free NFT</p>
        <p>only for IEEE members</p>
        <button className='button'>Free NFT</button>
    </div>
</div>

  );
};


Hero.schema = {
  name: 'hero',
  label: 'hero',
  sideEditProps: [],
}


export default Hero;