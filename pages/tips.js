import Menubar from "../comps/menubar";
import React from 'react';
import styles from "../styles/Home.module.css";
import GreenBar from '../comps/greenbar';
import {useRouter} from 'next/router';

export default function Tips() {
    const r = useRouter();
    const {type} = r.query;
    return <div className={styles.main}>
     
    <div className="pagetitle">
        <h1 className="header">Clothing Tips</h1>
        <p className="subheading">Select a category to help reduce waste and
        <br /> save your clothing pieces through our tips.</p>
        <br />
        <br />
        <br />
    </div>

        <div onClick={
            ()=>r.push({
                pathname:"/tipsitems",
                query:{
                    type:"hacks"
                }
            })
        }><GreenBar name="Fashion Hacks" /></div>

        <div onClick={
            ()=>r.push({
                pathname:"/tipsitems",
                query:{
                    type:"mending"
                }
            })
        }><GreenBar name="Mending Clothing" /></div>

        <div onClick={
            ()=>r.push({
                pathname:"/tipsitems",
                query:{
                    type:"care"
                }
            })
        }><GreenBar name="Clothing Care" /></div>
        <div onClick={
            ()=>r.push({
                pathname:"/tipsitems",
                query:{
                    type:"before"
                }
            })
        }><GreenBar name="Before You Purchase" /></div>
    
    <Menubar />
    </div>
    
    
}
