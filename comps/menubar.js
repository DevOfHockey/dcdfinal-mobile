import React from "react";
import Head from 'next/head'
import {HiHome, HiCheckCircle, HiShoppingBag, HiHeart} from 'react-icons/hi';
import {GiHanger} from 'react-icons/gi';
import {useRouter} from 'next/router';

function Menubar() {
    const r = useRouter();
    if (r.pathname=== '/'){
        return <div className='menubarcont'>
            </div>
    }



    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home")
            }><HiHome size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/shopping")
            }><HiShoppingBag size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/saved")
            }><HiHeart size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/tips")
            }><GiHanger size="35px" color="white"/></p>
        </div>

        <div className='labels'>
             <p> Home </p>
             <p> Verify </p>
             <p> Shopping </p>
             <p> Saved </p>
             <p> Tips </p>
        </div>
        </div>
    </div>
}

export default Menubar