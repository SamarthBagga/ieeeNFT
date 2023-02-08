import { types } from "react-bricks";
import React, { Component } from "react";
import Image from "next/image";






const About: types.Brick = () => {
  return (
    <div className='about' id='about'>
    <div className='container'>
      {/* <Image
      
      src="man.png"
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}
        

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