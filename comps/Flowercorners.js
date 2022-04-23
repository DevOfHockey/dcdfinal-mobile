import '../styles/globals.css'
import React from 'react'
import styled from 'styled-components'
//1- Just import styled-components and just style each div seperately in 
//2- Export default the function so it becomes a component
//Analysis: just putting css in there in a style tag, which you can apply to the exported function

const Flower1 = styled.div`
top:0;
left:0;  
position:absolute;
`;

const Flower2 = styled.div`
top:0;
right:0;
position:absolute;
`;

const Flower3 = styled.div`
bottom:0;
left:0;
position:absolute;
`;

const Flower4 = styled.div`
bottom:0;
right:0;
position:absolute;
`;

// HTML to become component
export default function Flowercorners() {
  return ( 
    <div className='flowercorners'> 
      {/* or <Flower1> etc replacing flower-div1 */}
      <div classname="flower-div1">
        <img src="/flowerTL.svg" alt="Flower icon"/> 
      </div>

      <div classname="flower-div2">
        <img src="/flowerTR.svg" alt="Flower icon"/> 
      </div>

      <div classname="flower-div3">
        <img src="/flowerBL.svg" alt="Flower icon"/> 
      </div>

      <div classname="flower-div4">
        <img src="/flowerBR.svg" alt="Flower icon"/> 
      </div>
    </div>
  )
}

