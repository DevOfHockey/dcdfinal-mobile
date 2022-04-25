import styles from "../styles/Home.module.css";
import {headertipsImgs} from "../data/headimgs";
import HeaderImgs from '../comps/headerimage';
import BodyText from '../comps/bodytext';
import {HiHeart, HiOutlineHeart, HiArrowNarrowLeft} from 'react-icons/hi';
import {useRouter} from "next/router";
import {useState} from "react";


export default function Tipsdescription() {
    const [icon, setIcon] = useState("unliked");
    const changeIcon = (state) => {
        if (state === "unliked") {
            return "liked";
        }
        return "unliked";
    };
    const r = useRouter();
    return <div className={styles.main}>

    <div className="arrow" onClick={
            ()=>r.push("/tipsitems")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>

    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>
    <div className="subhead">Fashion Hacks</div>

    <HeaderImgs arr={headertipsImgs} />

            <div className="like">
                {" "}
                {icon === "unliked" ? <HiOutlineHeart size="50px" backgroundColor="black" onClick={() => setIcon((old) => changeIcon(old))} /> : <HiHeart size="50px" color="#45602B" onClick={() => setIcon((old) => changeIcon(old))} />}
            </div>{" "}
        
    <div className="subhead">Guide: Fix shoe scuff marks</div>
    
    </div>
    <BodyText name="1. Get a bottle of nail polish that matches the colour of your shoes, or mix multiple together to get that colour" />
    <BodyText name="2. Paint the nail polish on top of any scuff marks on the shoes" />
    <BodyText name="3. Let the shoes dry" />
    
    </div>
    
}
