import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/Three";
import logo from "../react-bricks/bricks/images/logo.jpg"



const colorMap=useLoader(TextureLoader,logo);

const Box: React.FC = () => (
    
   
    
    <mesh rotation={[90,0,20]}>
        <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
        <meshStandardMaterial map={colorMap}/>
    </mesh>
  )

  

  


export default Box;
