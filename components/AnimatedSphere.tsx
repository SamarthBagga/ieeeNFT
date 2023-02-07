import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/Three";
import texture from "../react-bricks/bricks/images/logo.jpg"
import { Sphere,MeshDistortMaterial } from '@react-three/drei';




const AnimatedSphere: React.FC = () => { // <== {

  return ( // <== return
      <Sphere visible args={[1,100,200]} scale={2}>
        <MeshDistortMaterial color="#8352fd" attach="material" distort={0.3} speed={1.5} roughness={0}/>
      </Sphere>
  );
}; // <== }


  

  


export default AnimatedSphere;
