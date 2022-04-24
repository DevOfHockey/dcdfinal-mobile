import styles from "../styles/Home.module.css"; //all from home.module.css under styles.whateverclass e.g. main will have css applied
import React, { Component } from "react";
import styled from "styled-components";
// import Flowercorners from '../comps/flowercorners'
import ClothingImage from '../comps/clothingimage';
import FlowerCorner from '../comps/flowercorner'; //flowercorner.js component
import GreenBar from '../comps/greenbar';
import BodyText from '../comps/bodytext';
import {HiHeart} from 'react-icons/hi';

export default function Splashpage() { //can put raw html in here
    return <div className={styles.splashpagemain}>   {/*in home/module */}
     
      <div classname="flower-div1">  {/*global.css*/}
        <img src="/flowerTL.svg" alt="Flower icon"/> 
      </div>

      <div classname="flower-div2">  {/*global.css*/}
        <img src="/flowerTR.svg" alt="Flower icon"/> 
      </div>

      <div classname="flower-div3">  {/*global.css*/}
        <img src="/flowerBL.svg" alt="Flower icon"/> 
      </div>

      <div classname="flower-div4">  {/*global.css*/}
        <img src="/flowerBR.svg" alt="Flower icon"/> 
      </div>

    </div>
}













// return <FlowerCSS>
// <div classname='flowercorners'> 
//     <div classname="flower-div1">
//       <img src="/flowerTL.svg" alt="Flower icon"/> 
//     </div>

//     <div classname="flower-div2">
//       <img src="/flowerTR.svg" alt="Flower icon"/> 
//     </div>

//     <div classname="flower-div3">
//       <img src="/flowerBL.svg" alt="Flower icon"/> 
//     </div>

//     <div classname="flower-div4">
//       <img src="/flowerBR.svg" alt="Flower icon"/> 
//     </div>
//   </div>
// </FlowerCSS>