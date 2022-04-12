import React from "react";
import {HiHome, HiCheckCircle, HiShoppingBag, HiHeart} from 'react-icons/hi';
import {GiHanger} from 'react-icons/gi';

function Menubar() {
    return <div className='menubar'>
        
        <div className='icons'>
            <p><HiHome size="35px" color="white"/></p>
            <p><HiCheckCircle size="35px" color="white"/></p>
            <p><HiShoppingBag size="35px" color="white"/></p>
            <p><HiHeart size="35px" color="white"/></p>
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

export default Menubar