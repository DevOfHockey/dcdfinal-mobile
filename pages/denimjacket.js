import React from "react";
import HeaderImgs from '../comps/headerimage';
import { DenimImg } from "../data/headimgs";
import styles from "../styles/Home.module.css";

function DenimJacket() {
    return <div class="denimjacket">
        <h1 class="header">Shopping</h1>
        <HeaderImgs arr={DenimImg} />
        
        <div className={styles.deniminfo}>
        <p className={styles.denimprice}>$25 CAD</p>
            <p className={styles.denimsize}>Size: M - L</p>
            <p className={styles.vintagesherpa}>Vintage Sherpa Lined Denim Jacket</p>
            <p className={styles.denimdescription}>Excellent condition. Pick-up only at Brentwood mall.
            Message seller if interested to purchase.</p>
        </div>

        <button className={styles.contactbutton}>Contact Seller</button>

    </div>
}

export default DenimJacket