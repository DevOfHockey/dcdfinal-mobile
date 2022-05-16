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
        <h1 className="header">Home</h1>
        </div>

        <br />
        <div>
        <Fade bottom>
            <HeaderImgs arr={headerImgs} />
            <br />
            <div onClick={
                ()=>r.push("/about")
            }><GreenBar name="About Revived" /></div>
            <div onClick={
                ()=>r.push("/topics")
            }><GreenBar name="Fast Fashion Topics" /></div>
        </Fade>
        </div>
     
    </div>

    

} 
