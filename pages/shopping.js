import styles from "../styles/Home.module.css";
import { shopImgs, shopLabels } from "../data/shopitems";
import GridImgs from "../comps/gridimgs";
import GridTxt from "../comps/gridtext";



export default function Shopping() {
    return <div className={styles.main}>
     
    <div class="pagetitle">
        <h1 class="header">Shopping</h1>
        <p class="subheading">Browse second-hand clothing from our Community</p>
    </div>

    <div>
        <GridTxt arr={shopLabels} />    
    </div>

    <div class="shopImgs">
        <GridImgs arr={shopImgs} />
    </div>

    </div>
}