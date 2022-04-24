import styles from "../styles/Home.module.css";
import ClothingImage from '../comps/clothingimage';
import HeaderImage from '../comps/headerimage';
import GreenBar from '../comps/greenbar';
import BodyText from '../comps/bodytext';
import {HiHeart} from 'react-icons/hi';

export default function Tipsdescription() {
    return <div className={styles.main}>
    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>
    <div className="subhead">Fashion Hacks</div>
    <HeaderImage />
    <div className="like" onClick={
            () => (color="#45602B")
        }><HiHeart size="50px" color="#EBEAEA" /></div>
    <div className="subhead">Guide: Fix shoe scuff marks</div>
    
    </div>
    <BodyText name="1. Get a bottle of nail polish that matches the colour of your shoes, or mix multiple together to get that colour" />
    <BodyText name="2. Paint the nail polish on top of any scuff marks on the shoes" />
    <BodyText name="3. Let the shoes dry" />
    
    </div>
    
}