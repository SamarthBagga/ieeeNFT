import { useState, useEffect } from "react";
import { types } from "react-bricks";
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import { Image } from "react-bricks";






const Demo: types.Brick = () => {
  return (
    <div className='demo' id='demo'>
    <div className='container'>
        
        <div className='col-2'>
            <iframe className="youtube" src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
    </div>
</div>

  );
};


Demo.schema = {
  name: 'demo',
  label: 'demo',
  sideEditProps: [],
}


export default Demo;