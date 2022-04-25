import React from "react";
import styles from "../styles/Home.module.css";
import HeaderImgs from '../comps/headerimage';
import {aboutImgs} from "../data/headimgs";
import {HiArrowNarrowLeft} from 'react-icons/hi';
import {useRouter} from 'next/router';

function About() {
    const r = useRouter();
    return <div class="aboutpage">

        <div className="arrow" onClick={
            ()=>r.push("/")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>

        <h1 class="header">About Us</h1>
        <HeaderImgs arr={aboutImgs} />
        <p class ="pagedescription">Revived is a fashion conscious app developed by our team with a 
            mission to help raise awarness on the negative impacts of 
            the fast fashion industry and make more sustainable choices for 
            fashion. This app also provides resources on how people can reuse their 
            clothing or re-sell their clothing in the community page. 
        </p>
    </div>
}

export default About