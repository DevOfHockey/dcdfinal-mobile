import React from "react";
import Head from 'next/head'
import {HiHome, HiCheckCircle, HiShoppingBag, HiHeart} from 'react-icons/hi';
import {GiHanger} from 'react-icons/gi';
import {useRouter} from 'next/router';

function Menubar() {
    const r = useRouter();

    /* Splash */
    if (r.pathname=== '/'){
        return <div className='menubarcont'>
            </div>
    }

    /* Home */
    if (r.pathname=== '/home'){
    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home") 
            }><HiHome size="35px" color="#9D9B6C" /></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="white" /></p>

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

    if (r.pathname=== '/about'){
    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home") 
            }><HiHome size="35px" color="#9D9B6C" /></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="white" /></p>

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

    if (r.pathname=== '/topics'){
    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home") 
            }><HiHome size="35px" color="#9D9B6C" /></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="white" /></p>

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

    /* Verifier */
    if (r.pathname=== '/verifier'){
    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home") 
            }><HiHome size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="#9D9B6C" /></p>

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

    /* Shopping */
    if (r.pathname=== '/shopping'){
    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home") 
            }><HiHome size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/shopping")
            }><HiShoppingBag size="35px" color="#9D9B6C"/></p>

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

    if (r.pathname=== '/denimjacket'){
    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home") 
            }><HiHome size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/shopping")
            }><HiShoppingBag size="35px" color="#9D9B6C"/></p>

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

    /* Saved */
    if (r.pathname=== '/saved'){
    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home") 
            }><HiHome size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/shopping")
            }><HiShoppingBag size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/saved")
            }><HiHeart size="35px" color="#9D9B6C"/></p>

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
    
    /* Tips */
    if (r.pathname=== '/tips', '/tipsitems', '/tipsdescription'){
    return <div className='menubarcont'>
        <div className='menubar'>
        <div className='icons'>
            <p onClick={
                ()=>r.push("/home") 
            }><HiHome size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/verifier")
            }><HiCheckCircle size="35px" color="white" /></p>

            <p onClick={
                ()=>r.push("/shopping")
            }><HiShoppingBag size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/saved")
            }><HiHeart size="35px" color="white"/></p>

            <p onClick={
                ()=>r.push("/tips")
            }><GiHanger size="35px" color="#9D9B6C"/></p>
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
}

export default Menubar