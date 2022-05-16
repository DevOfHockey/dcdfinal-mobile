import Menubar from "../comps/menubar";
import styles from "../styles/Home.module.css";
import {hacksImgs, mendingImgs, careImgs, beforeImgs} from "../data/headimgs";
import HeaderImgs from '../comps/headerimage';
import BodyText from '../comps/bodytext';
import {HiHeart, HiOutlineHeart, HiArrowNarrowLeft} from 'react-icons/hi';
import {useRouter} from "next/router";
import {useState} from "react";
import Fade from 'react-reveal/Fade';


export default function Tipsdescription() {
    const [icon, setIcon] = useState("unliked");
    const changeIcon = (state) => {
        if (state === "unliked") {
            return "liked";
        }
        return "unliked";
    };
    const r = useRouter();
    const {type} = r.query;

    if (type=== 'hacks'){
    return <div className={styles.main}>

    <div className="arrow" onClick={
            ()=>r.push({
                pathname:"/tipsitems",
                query:{
                    type:"hacks"
                }
            })
        }><HiArrowNarrowLeft size="45px" color="black" /></div>

    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>

    <Fade bottom>
    <div>
    <div className="subhead">Fashion Hacks</div>

    <HeaderImgs arr={hacksImgs} />

            <div className="like">
                {" "}
                {icon === "unliked" ? <HiOutlineHeart size="50px" backgroundColor="black" onClick={() => setIcon((old) => changeIcon(old))} /> : <HiHeart size="50px" color="#45602B" onClick={() => setIcon((old) => changeIcon(old))} />}
            </div>{" "}
    <br />   
    <div className="subhead">Guide: Fix shoe scuff marks</div>
    
    </div>
    <BodyText name="1. Get a bottle of nail polish that matches the colour of your shoes, or mix multiple together to get that colour" />
    <BodyText name="2. Paint the nail polish on top of any scuff marks on the shoes" />
    <BodyText name="3. Let the shoes dry" />
    </div>
    </Fade>
    
    <Menubar />
    </div>
    }

        if (type=== 'mending'){
    return <div className={styles.main}>

    <div className="arrow" onClick={
            ()=>r.push({
                pathname:"/tipsitems",
                query:{
                    type:"mending"
                }
            })
        }><HiArrowNarrowLeft size="45px" color="black" /></div>

    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>
    <div className="subhead">Clothing Mending</div>

    <HeaderImgs arr={mendingImgs} />

            <div className="like">
                {" "}
                {icon === "unliked" ? <HiOutlineHeart size="50px" backgroundColor="black" onClick={() => setIcon((old) => changeIcon(old))} /> : <HiHeart size="50px" color="#45602B" onClick={() => setIcon((old) => changeIcon(old))} />}
            </div>{" "}
    <br />   
    <div className="subhead">Fixing Holes by Sewing</div>
    
    </div>
    <BodyText name="2. Loop thread into needle" />
    <BodyText name="2. Turn your clothing item inside out" />
    <BodyText name="3. Loop thread into start of path 3 times, sew along seam" />
    <BodyText name="4. Loop thread into end of path 3 times to secure the seam" />
    
    <Menubar />
    </div>
    }

        if (type=== 'care'){
    return <div className={styles.main}>

    <div className="arrow" onClick={
            ()=>r.push({
                pathname:"/tipsitems",
                query:{
                    type:"care"
                }
            })
        }><HiArrowNarrowLeft size="45px" color="black" /></div>

    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>
    <div className="subhead">Clothing Care</div>

    <HeaderImgs arr={careImgs} />

            <div className="like">
                {" "}
                {icon === "unliked" ? <HiOutlineHeart size="50px" backgroundColor="black" onClick={() => setIcon((old) => changeIcon(old))} /> : <HiHeart size="50px" color="#45602B" onClick={() => setIcon((old) => changeIcon(old))} />}
            </div>{" "}
    <br />   
    <div className="subhead">Proper Washing of Clothes</div>
    
    </div>
    <BodyText name="1. Separate lights, darks and colours while washing to avoid colour staining your clothing" />
    <BodyText name="2. Set the washing machine to your designated mode to wash. For dark or bright colors that bleed or delicate fabrics, use cold water. For most other clothes, use warm water." />
    
    <Menubar />
    </div>
    }

    if (type=== 'before'){
    return <div className={styles.main}>

    <div className="arrow" onClick={
            ()=>r.push({
                pathname:"/tipsitems",
                query:{
                    type:"before"
                }
            })
        }><HiArrowNarrowLeft size="45px" color="black" /></div>

    <div className="pagetitle">
    <h1 className="header">Clothing Tips</h1>
    <div className="subhead">Before You Purchase</div>

    <HeaderImgs arr={beforeImgs} />

            <div className="like">
                {" "}
                {icon === "unliked" ? <HiOutlineHeart size="50px" backgroundColor="black" onClick={() => setIcon((old) => changeIcon(old))} /> : <HiHeart size="50px" color="#45602B" onClick={() => setIcon((old) => changeIcon(old))} />}
            </div>{" "}
    <br />   
    <div className="subhead">Will you wear this a lot?</div>
    
    </div>
    <BodyText name="Before making a clothing purchase consider if it is something you will wear multiple times. It can be a waste of money and a clothing item to buy something you won’t get a lot of use of." />
    
    <Menubar />
    </div>
    }

}
