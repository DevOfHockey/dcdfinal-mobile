import styles from "../styles/Home.module.css";
import { shopImgs, shopLabels } from "../data/shopitems";
import GridImgs from "../comps/gridimgs";
import GridTxt from "../comps/gridtext";
import {useRouter} from 'next/router';
import Fade from 'react-reveal/Fade';

export default function Shopping() {
    const r = useRouter();
    const {page} = r.query;

    return <div className={styles.main}>
    
    <div className="pagetitle">
        <h1 className="header">Shopping</h1>
        <p className="subheading">Browse secondhand Community clothing</p>
    </div>

    <Fade bottom>
    <div className="shopImgs" onClick={
        ()=>r.replace({
            pathname:"/denimjacket",
            query:{
                page:1
            }
        })
    }>
        <GridImgs arr={shopImgs} />
    </div>

    <div className="shopLabels">
        <GridTxt arr={shopLabels} />    
    </div>
    </Fade>
    
    </div>
}