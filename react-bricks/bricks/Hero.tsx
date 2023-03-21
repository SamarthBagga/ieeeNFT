
import { types } from "react-bricks";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Suspense} from "react";
import ScrollSpy from "react-ui-scrollspy";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "./images/logo.jpg";
import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box";
import { OrbitControls, } from "@react-three/drei";
import Monke from "../../components/Model"






const Hero: types.Brick = () => {


  return (
    <div className="hero" id="hero">
    <div className="other">
        <p>MUJ's First and largest NFT Giveaway</p>
        <h1>IEEE NFT <br/> <span>GIVEAWAY</span></h1>
        <p>Yes,you read it right. IEEE SB MUJ brings to you <br/> 
        <span>NFT FOR EVERYONE</span><br/>
        Now, Everyone can own a NFT(Non Fungible <br/> Token) for free.

        </p>
        <p></p>

        <button className='button'>Free NFT</button>
      </div>
         
          {/* <Image
      src="/bg.svg"
      alt="Picture of the author"
      width={500}
      height={500}
      className="box"
    
     /> */}
     
    <div className="nft">

    <Canvas className="canvas">
    <OrbitControls enableZoom={false} autoRotate={true}  autoRotateSpeed={10.0}/>
    <ambientLight isAmbientLight={true} color={"rgb(255, 0, 0)"} isLight={true}  intensity={5.0} />
    <directionalLight position={[-2,5,2]} intensity={5}/>
    <Suspense fallback={null}>
    <Monke/>
    </Suspense>
  </Canvas>
    
        
  {/* bassi bagga  */}
  
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