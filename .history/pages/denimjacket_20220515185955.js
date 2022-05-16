import React from "react";
import Menubar from "../comps/menubar";
import HeaderImgs from '../comps/headerimage';
import { DenimImg } from "../data/headimgs";
import styles from "../styles/Home.module.css";
import {HiArrowNarrowLeft} from 'react-icons/hi';
import {useRouter} from 'next/router';
import Fade from 'react-reveal/Fade';

function DenimJacket() {
    const r = useRouter();
    return <div class="denimjacket">
        <h1 class="header">Shopping</h1>

        <div className="arrow" onClick={
            ()=>r.push("/shopping")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>

        <HeaderImgs arr={DenimImg} />
        
        <Fade bottom>
        <div>
        <div className={styles.deniminfo}>
        <p className={styles.denimprice}>$25 CAD</p>
            <p className={styles.denimsize}>Size: M - L</p>
            <p className={styles.vintagesherpa}>Vintage Sherpa Lined Denim Jacket</p>
            <p className={styles.denimdescription}>Excellent condition. Pick-up only at Brentwood mall.
            Message seller if interested to purchase.</p>
        </div>

        <div className={styles.buttoncont}>
            <button className={styles.contactbutton}>Contact Seller</button>
        </div>
        </div>
        </Fade>
        
        <Menubar />
    </div>

}

export default DenimJacket