
import Menubar from "../comps/menubar";
import HeaderImgs from "../comps/headerimage";
import GreenBar from "../comps/greenbar";
import styles from "../styles/Home.module.css";
import {headerImgs} from "../data/headimgs";
import {useRouter} from 'next/router';
import {HiArrowNarrowLeft} from 'react-icons/hi';
import Fade from 'react-reveal/Fade';

export default function Home(){
    const r = useRouter();

    return <div className={styles.main}>
        <div className="pagetitle">
            <h1 className="header">Topics</h1>
        </div>
        <br />

        <div className="arrow" onClick={ 
            ()=>r.push("/")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>  

        <Fade bottom>
        <div>
        <div onClick={
            ()=>r.push("/about")
        }><GreenBar name="Recent Events" /></div>
        <div onClick={
            ()=>r.push("/about")
        }><GreenBar name="Wastes and Toxins" /></div>
                <div onClick={
            ()=>r.push("/about")
        }><GreenBar name="Unethical Labour" /></div>
                <div onClick={
            ()=>r.push("/about")
        }><GreenBar name="Enviormental Impacts" /></div>
                <div onClick={
            ()=>r.push("/about")
        }><GreenBar name="Resources" /></div>
        </div>
        </Fade>
     
    <Menubar />
    </div>

} 