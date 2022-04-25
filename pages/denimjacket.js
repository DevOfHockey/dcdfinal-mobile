import React from "react";
import DenimImage from "../comps/shopdenimimg";

function DenimJacket() {
    return <div class="denimjacket">
        <h1 class="header">Shopping</h1>
        
        <DenimImage />
        
        <div class="deniminfo">
            <p class="denimtitle">Vintage Sherpa Lined Denim Jacket</p>
            <p>$25 CAD</p>
            <p>Size: M - L</p>
            <p>Excellent condition. Pick-up only at Brentwood mall.
            Message seller if interested to purchase.</p>
        </div>

        <button class="contact">Contact Seller</button>

    </div>
}

export default DenimJacket