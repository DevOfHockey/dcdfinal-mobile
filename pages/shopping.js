import styles from "../styles/Home.module.css";
import { shopImgs, shopLabels } from "../data/shopitems";
import GridImgs from "../comps/gridimgs";
import GridTxt from "../comps/gridtext";
import {useRouter} from 'next/router';



export default function Shopping() {
    const r = useRouter();
    const {page} = r.query;

    return <div className={styles.main}>
     
    <div class="pagetitle">
        <h1 class="header">Shopping</h1>
        <p class="subheading">Browse second-hand clothing from our Community</p>
    </div>

<<<<<<< HEAD
    <div>
        <GridTxt arr={shopLabels} />    
    </div>

    <div class="shopImgs">
=======
    <div class="shopImgs" onClick={
        ()=>r.replace({
            pathname:"/denimjacket",
            query:{
                page:1
            }
        })
    }>
>>>>>>> 21f8d5f (shopping update)
        <GridImgs arr={shopImgs} />
    </div>

    </div>
}