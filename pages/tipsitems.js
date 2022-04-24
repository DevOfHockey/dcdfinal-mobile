import styles from "../styles/Home.module.css";
import ClothingImage from '../comps/clothingimage';
import HeaderImage from '../comps/headerimage';
import GreenBar from '../comps/greenbar';
import BodyText from '../comps/bodytext';
import {useRouter} from 'next/router';

export default function Tipsitems( ){
    const r = useRouter();
    return <div className={styles.main}>
     
    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>
    <div className="subhead">Fashion Hacks</div>
    <div className="rows">
        <div className="row"><div onClick={
                ()=>r.push("/tipsdescription")
            }><ClothingImage /></div>
            Shoe Scuff Marks
        </div>
        <div className="row"><div onClick={
                ()=>r.push("/tipsdescription")
            }><ClothingImage /></div>
            Clean Shoes
        </div>
        <div className="row"><div onClick={
                ()=>r.push("/tipsdescription")
            }><ClothingImage /></div>
            Dye Jeans
        </div>
        <div className="row"><div onClick={
                ()=>r.push("/tipsdescription")
            }><ClothingImage /></div>
            Tie Dye
        </div>
        <div className="row"><div onClick={
                ()=>r.push("/tipsdescription")
            }><ClothingImage /></div>
            Colour Shoes
        </div>
        <div className="row"><div onClick={
                ()=>r.push("/tipsdescription")
            }><ClothingImage /></div>
            Shoe Scuff Marks
        </div>
    </div>

    </div>
    </div>
    
}