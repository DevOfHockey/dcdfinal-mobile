import Menubar from "../comps/menubar";
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
    
    <div class="pagetitle">
        <h1 class="header">Shopping</h1>
        <p class="subheading">Browse secondhand Community clothing</p>
    </div>

    <Fade bottom>
    <div class="shopImgs" onClick={
        ()=>r.replace({
            pathname:"/denimjacket",
            query:{
                page:1
            }
        })
    }>
        <GridImgs arr={shopImgs} />
    </div>

    <div class="shopLabels">
        <GridTxt arr={shopLabels} />    
    </div>
    </Fade>
    
    <Menubar />
    </div>
}