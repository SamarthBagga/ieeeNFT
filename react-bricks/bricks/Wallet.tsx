
import { types } from "react-bricks";
import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'






const Wallet: types.Brick = () => {

    
	
	return (
		<div>
			<p>connect wallet</p>
		</div>
	);
;}



Wallet.schema = {
  name: 'wallet',
  label: 'wallet',
  sideEditProps: [],
}


export default Wallet;