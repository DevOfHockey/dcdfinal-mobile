//1- If u want u can import styled.components & do more styling here
//2- Use router is to route the pages if u want

import HeaderImgs from "../comps/headerimage";
import GreenBar from "../comps/greenbar";
import styles from "../styles/Home.module.css";
import {headerImgs} from "../data/headimgs";
import {useRouter} from 'next/router';
import {HiArrowNarrowLeft} from 'react-icons/hi';
import Fade from 'react-reveal/Fade';

export default function Home(){
    const r = useRouter();

    return <div className={styles.main}>
        <div className="pagetitle">
            <h1 className="header">Verify</h1>
            <p class="subheading">Verify brand sustainability / ethical practices </p>
        </div>

        <div>
        <div className="arrow" onClick={ 
            ()=>r.push("/")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>  
        </div>

        <div>
        <Fade bottom>
        <div onClick={
            ()=>r.push("https://goodonyou.eco/")
        }><GreenBar name="Good on You" /></div>
        <div onClick={
            ()=>r.push("https://goodonyou.eco/")
        }><GreenBar name="Ethicalconsumers.org" /></div>
                <div onClick={
            ()=>r.push("https://goodonyou.eco/")
        }><GreenBar name="Eupedia" /></div>
                <div onClick={
            ()=>r.push("https://goodonyou.eco/")
        }><GreenBar name="More" /></div>
                <div onClick={
            ()=>r.push("https://goodonyou.eco/")
        }></div>
        </Fade>
        </div>
     
    </div> 

} 
