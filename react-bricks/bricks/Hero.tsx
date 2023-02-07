
import { types } from "react-bricks";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Suspense} from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import { Image } from "react-bricks";
import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box";
import { OrbitControls, } from "@react-three/drei";
import Sphere from "../../components/AnimatedSphere";
import Monke from "../../components/Model"






const Hero: types.Brick = () => {
  return (
    <div className="flexing hero" id="hero">
    <div className="other">
        <p>Free NFT</p>
        <p>only for IEEE members</p>
        <button className='button'>Free NFT</button>
      </div>
        <div className="nft">
        <Canvas className="canvas">
    <OrbitControls enableZoom={true}/>
    <ambientLight intensity={0.5} />
    <directionalLight position={[-2,5,2]} intensity={1}/>
    <Suspense fallback={null}>
    <Monke/>
    </Suspense>
  </Canvas>
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