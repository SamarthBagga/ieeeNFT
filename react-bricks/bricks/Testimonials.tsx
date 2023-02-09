import { useState, useEffect } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import {Link} from "react-scroll"
import { types, Text, RichText, Image } from 'react-bricks/frontend'






const Testimonials: types.Brick = () => {
  return (
    <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>FAQS</h2>
                <span className='line'></span>
                <div className='content'>
                <div className='card'>
                       
                       <p>Do I need a wallet?</p>
                       <p><span>Yes</span></p>
                       {/* <p>get one from this link-</p> */}
                   </div>
                    <div className='card'>
                       
                        <p>Do I need a wallet?</p>
                        <p><span>Yes</span></p>
                        {/* <p>get one from this link-</p> */}
                    </div>
                    <div className='card'>
                       
                        <p>Do I need a wallet?</p>
                        <p><span>Yes</span></p>
                        {/* <p>get one from this link-</p> */}
                    </div>
                    
                </div>
            </div>
        </div>

  );
};


Testimonials.schema = {
  name: 'testimonials',
  label: 'testimonials',
  sideEditProps: [],
}


export default Testimonials;