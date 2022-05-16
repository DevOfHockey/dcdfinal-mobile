import Menubar from "../comps/menubar";
import styles from "../styles/Home.module.css";
import {hacksImgs, hacksLabels, mendingImgs, mendingLabels, careImgs, careLabels, beforeImgs, beforeLabels} from "../data/tipsitems";
import ClothingImgs from "../comps/clothingimage";
import ClothingTxt from "../comps/clothingtxt";
import {HiArrowNarrowLeft} from 'react-icons/hi';
import {useRouter} from 'next/router';
import BeforeTxt from "../comps/beforetxt";
import Fade from 'react-reveal/Fade';


export default function TipsItems() {
    const r = useRouter();
    const {type} = r.query;
    if (type=== 'hacks'){
    return <div className={styles.main}>

<div className="arrow" onClick={
            ()=>r.push("/tips")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>
     
    <div className="pagetitle">
        <h1 className="header">Clothing Tips</h1>
        <div className="subhead">Fashion Hacks</div>
    </div>

    <Fade bottom>
    <div>
    <div onClick={
            ()=>r.push({
                pathname:"/tipsdescription",
                query:{
                    type:"hacks"
                }
            })
        }><ClothingImgs arr={hacksImgs} /></div>
    
    <ClothingTxt arr={hacksLabels} />
    </div>
    </Fade>

    <Menubar />
    </div>
}

if (type=== 'mending'){
    return <div className={styles.main}>

<div className="arrow" onClick={
            ()=>r.push("/tips")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>
     
    <div className="pagetitle">
        <h1 className="header">Clothing Tips</h1>
        <div className="subhead">Mending Clothing</div>
    </div>

    <Fade bottom>
    <div>
    <div onClick={
            ()=>r.push({
                pathname:"/tipsdescription",
                query:{
                    type:"mending"
                }
            })
        }><ClothingImgs arr={mendingImgs} /></div>
    
    <ClothingTxt arr={mendingLabels} />
    </div>
    </Fade>

    <Menubar />
    </div>
}

if (type=== 'care'){
    return <div className={styles.main}>

<div className="arrow" onClick={
            ()=>r.push("/tips")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>
     
    <div className="pagetitle">
        <h1 className="header">Clothing Tips</h1>
        <div className="subhead">Clothing Care</div>
    </div>

    <div onClick={
            ()=>r.push({
                pathname:"/tipsdescription",
                query:{
                    type:"care"
                }
            })
        }><ClothingImgs arr={careImgs} /></div>
    
    <ClothingTxt arr={careLabels} />

    <Menubar />
    </div>
}

if (type=== 'before'){
    return <div className={styles.main}>

<div className="arrow" onClick={
            ()=>r.push("/tips")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>
     
    <div className="pagetitle">
        <h1 className="header">Clothing Tips</h1>
        <div className="subhead">Before You Purchase</div>
    </div>

    <div onClick={
            ()=>r.push({
                pathname:"/tipsdescription",
                query:{
                    type:"before"
                }
            })
        }><ClothingImgs arr={beforeImgs} /></div>
    
    <BeforeTxt arr={beforeLabels} />

    <Menubar />
    </div>
}

}
