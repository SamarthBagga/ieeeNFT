import { types } from "react-bricks";
import React, { Component } from "react";
import { Text, RichText } from 'react-bricks/frontend'
import Image from 'next/image'







const About: types.Brick = () => {
  return (
    <div>
    <div>
      <Image
      src="/banner.svg"
      alt="Picture of the author"
      className="banner"
      width={500} 
      height={100}
      
    />
    </div>
    
    <div className='about' id='about'>
      
      
     

       
   
    <Image
      src="/man.png"
      alt="Picture of the author"
      width={500}
      height={500}
      className="man"
    
     />
    <Image
       src="/blur.svg"
       alt="Picture of the author"
       width={500}
       height={500}
     className="blurBox"
    
     />
    
    
   
      
        

    </div>
    <div>
      <Image
      src="/banner2.svg"
      alt="Picture of the author"
      className="banner2"
      width={500} 
      height={100}
      
    />
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