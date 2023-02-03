import { useState, useEffect } from "react";
import { types } from "react-bricks";
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import { Image } from "react-bricks";

import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box";
import { OrbitControls } from "@react-three/drei";






const Three: types.Brick = () => {
  return (
    <Canvas className="canvas">
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2,5,2]} intensity={1}/>
      <Box/>
    </Canvas>
  ); 
};


Three.schema = {
  name: 'Three',
  label: 'Three',
  sideEditProps: [],
}


export default Three;