import React from 'react';
import styles from "../styles/Home.module.css"; //haven't used yet
import {useRouter} from 'next/router';
import BeginButton from '../comps/beginbutton'; //important! to import
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

export default function Splashpage() { //See     global.css  >  .pagetitle    h1.header    p.subheading       to apply CSS here!
    const r = useRouter(); 
    //use this useRouter to allow onclick

    return <div className="splashpage">  
    
     <div className="flowercorners">   
        <div className= "flower-div1">
            <Image src="/flowerTL.svg" alt="Flower icon" width={100} height={100}/> 
        </div>
        {/* <div class = "flower-div2">
            <img src="/flowerTR.svg" alt="Flower icon"/> 
        </div> */}
        <div className = "flower-div3">
            <Image src="/flowerBL.svg" alt="Flower icon" width={100} height={100}/> 
        </div>
        <div className = "flower-div4">
            <Image src="/flowerBR.svg" alt="Flower icon" width={100} height={100}/> 
        </div>
     </div>

     <div className={styles.main}>
        <div className="pagetitle">
            <div className ="revived-logo">
                <Image src="/logo.svg" alt="Logo" width={100} height={100}/> 
            </div>
            <Fade bottom>
            <h1 className="header">Revived</h1> 
            <p className="subheading">Welcome! Let's start making <br/>a difference with efforts to <br/>reduce the footprint of our <br/>clothes on our planet!</p>
            </Fade>
        </div>
     </div>

     <div onClick={
            ()=>r.push("/")
        }><BeginButton name="Let's begin!" /></div>

    </div> 
}


