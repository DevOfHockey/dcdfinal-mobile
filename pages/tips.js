import Menubar from "../comps/menubar";
import React from 'react';
import styles from "../styles/Home.module.css";
import GreenBar from '../comps/greenbar';
import {useRouter} from 'next/router';

export default function Tips() {
    const r = useRouter();
    return <div className={styles.main}>
     
    <div className="pagetitle">
        <h1 className="header">Clothing Tips</h1>
        <p className="subheading">Help reduce waste and save your 
        <br />clothing pieces through our tips.</p>
        <div className="subhead">Select a Category</div>
    </div>

        <div onClick={
            ()=>r.push("/tipsitems")
        }><GreenBar name="Fashion Hacks" /></div>
        <div onClick={
            ()=>r.push("/tipsitems")
        }><GreenBar name="Mending Clothing" /></div>
        <div onClick={
            ()=>r.push("/tipsitems")
        }><GreenBar name="Clothing Care" /></div>
        <div onClick={
            ()=>r.push("/tipsitems")
        }><GreenBar name="Before You Purchase..." /></div>
    
    <Menubar />
    </div>
    
    
}
