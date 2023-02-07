import { useState, useEffect } from "react";
import { types } from "react-bricks";
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component ,Suspense,} from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import { Image } from "react-bricks";
import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box";
import { OrbitControls, } from "@react-three/drei";
import Sphere from "../../components/AnimatedSphere";
import Monke from "../../components/Model"






const Three: types.Brick = () => {
  return (
    <div>
    <Canvas className="canvas">
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2,5,2]} intensity={1}/>
      <Suspense fallback={null}>
      <Box/>
      </Suspense>
    </Canvas>
    <Canvas className="canvas">
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={0.5} />
    <directionalLight position={[-2,5,2]} intensity={1}/>
    <Suspense fallback={null}>
    <Sphere/>
    </Suspense>
  </Canvas>
  <Canvas className="canvas">
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={0.5} />
    <directionalLight position={[-2,5,2]} intensity={1}/>
    <Suspense fallback={null}>
    <Monke/>
    </Suspense>
  </Canvas>
  </div>
  ); 
};


Three.schema = {
  name: 'Three',
  label: 'Three',
  sideEditProps: [],
}


export default Three;