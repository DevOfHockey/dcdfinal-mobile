import styles from "../styles/Home.module.css";
import ClothingImage from '../comps/clothingimage';
import HeaderImage from '../comps/headerimage';
import GreenBar from '../comps/greenbar';
import BodyText from '../comps/bodytext';

export default function Tipsitems() {
    return <div className={styles.main}>
     
    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>
    <div className="subhead">Fashion Hacks</div>
    <div className="rows">
    <div className="row"><ClothingImage  /></div>
    <div className="row"><ClothingImage  /></div>
    <div className="row"><ClothingImage  /></div>
    <div className="row"><ClothingImage  /></div>
    <div className="row"><ClothingImage  /></div>
    <div className="row"><ClothingImage  /></div>
    </div>
    </div>
    
    </div>
    
}