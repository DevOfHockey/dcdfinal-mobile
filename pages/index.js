import Menubar from "../comps/menubar";
import HeaderImgs from "../comps/headerimage";
import GreenBar from "../comps/greenbar";
import styles from "../styles/Home.module.css";
import {headerImgs} from "../data/headimgs";
import React from 'react';
import styles from "../styles/Home.module.css"; //haven't used yet
import {useRouter} from 'next/router';
import BeginButton from '../comps/beginbutton'; //important! to import

export default function Splashpage() { //See     global.css  >  .pagetitle    h1.header    p.subheading       to apply CSS here!
    const r = useRouter(); 
    //use this useRouter to allow onclick

    return <div class="splashpage">  
    
     <div class="flowercorners">   
        <div class = "flower-div1">
            <img src="/flowerTL.svg" alt="Flower icon"/> 
        </div>
        <div class = "flower-div2">
            <img src="/flowerTR.svg" alt="Flower icon"/> 
        </div>
        <div class = "flower-div3">
            <img src="/flowerBL.svg" alt="Flower icon"/> 
        </div>
        <div class = "flower-div4">
            <img src="/flowerBR.svg" alt="Flower icon"/> 
        </div>
     </div>

     <div className={styles.main}>
        <div class="pagetitle">
            <div class = "revived-logo">
                <img src="/logo.svg" alt="Logo"/> 
            </div>
            <h1 class="header">Revived</h1> 
            <p class="subheading">Welcome! Let's start making <br/>a difference with efforts to <br/>reduce the footprint of our <br/>clothes on our planet!</p>
        </div>
     </div>

     <div onClick={
            ()=>r.push("/home")
        }><BeginButton name="Let's begin!" /></div>

    </div> 
}


