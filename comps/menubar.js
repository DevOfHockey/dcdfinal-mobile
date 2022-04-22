import React from "react";
import {HiHome, HiCheckCircle, HiShoppingBag, HiHeart} from 'react-icons/hi';
import {GiHanger} from 'react-icons/gi';
import {useRouter} from 'next/router';

export default function Menubar() {
    const r = useRouter();


    return <div className='menubar'>
        
        <div className='icons'>
            <p onClick={
                ()=>r.push("/")
            }><HiHome size="35px" color="white"/></p>

            <p><HiCheckCircle size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/shopping")
            }><HiShoppingBag size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/saved")
            }><HiHeart size="35px" color="white"/></p>

            <p><GiHanger size="35px" color="white"/></p>
        </div>

        <div className='labels'>
             <p> Home </p>
             <p> Verify </p>
             <p> Shopping </p>
             <p> Saved </p>
             <p> Tips </p>
        </div>
    </div>
}