import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import ClothingImage from '../comps/clothingimage';
import HeaderImage from '../comps/headerimage';
import GreenBar from '../comps/greenbar';
import BodyText from '../comps/bodytext';

export default function Tips() {
    return <div className={styles.main}>
     
    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>
    <p className="subheading">Help reduce waste and save your <br />clothing pieces through our tips.</p>
    <div className="subhead">Select a Category</div>
   
    <GreenBar name="Fashion Hacks" />
    <GreenBar name="Mending Clothing" />
    <GreenBar name="Mending Clothing" />
    <GreenBar name="Things to Consider Before a Purchase" />
    </div>
    
    </div>
    
}
