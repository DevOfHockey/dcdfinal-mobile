import styles from "../styles/Home.module.css";
import { shopImgs } from "../data/shopitems";
import GridImgs from "../comps/gridimgs";

export default function Shopping() {
    return <div className={styles.main}>
     
    <div class="pagetitle">
        <h1 class="header">Shopping</h1>
        <p class="subheading">Browse second-hand clothing from our Community</p>
    </div>

    <div class="shopImgs">
        {
            //shopImgs.map((o,i)=><img src={o} height={180} />)
        }
        <GridImgs arr={shopImgs} />
    </div>

    </div>
}