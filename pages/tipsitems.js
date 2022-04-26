import Menubar from "../comps/menubar";
import styles from "../styles/Home.module.css";
import {tipsImgs, tipsLabels} from "../data/tipsitems";
import ClothingImgs from "../comps/clothingimage";
import ClothingTxt from "../comps/clothingtxt";
import {HiArrowNarrowLeft} from 'react-icons/hi';
import {useRouter} from 'next/router';



export default function Tips() {
    const r = useRouter();
    return <div className={styles.main}>

<div className="arrow" onClick={
            ()=>r.push("/tips")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>
     
    <div className="pagetitle">
        <h1 className="header">Clothing Tips</h1>
        <div className="subhead">Fashion Hacks</div>
    </div>

    <div onClick={
            ()=>r.push("/tipsdescription")
        }><ClothingImgs arr={tipsImgs} /></div>
    
    <ClothingTxt arr={tipsLabels} />

    <Menubar />
    </div>
}