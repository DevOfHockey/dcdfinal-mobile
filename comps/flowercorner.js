// // import '../styles/globals.css'
// import React from 'react'
// import styled from 'styled-components'
// //1- Just import styled-components and just style each div seperately in 
// //2- Export default the function so it becomes a component
// //Analysis: just putting css in there in a style tag, which you can apply to the exported function

// const Flower1 = styled.div`
// top:0;
// left:0;  
// position:absolute;
// `;

// const Flower2 = styled.div`
// top:0;
// right:0;
// position:absolute;
// `;

// const Flower3 = styled.div`
// bottom:0;
// left:0;
// position:absolute;
// `;

// const Flower4 = styled.div`
// bottom:0;
// right:0;
// position:absolute;
// `;

// // HTML to become component
// export default function Flowercorners() {
//   return ( 
//     <div className='flowercorners'> 
//       {/* or <Flower1> etc replacing flower-div1 */}
//       <Flower1>
//         <img src="/flowerTL.svg" alt="Flower icon"/> 
//       </Flower1>
//       <Flower2>
//         <img src="/flowerTR.svg" alt="Flower icon"/> 
//       </Flower2>
//       <Flower3>
//         <img src="/flowerBL.svg" alt="Flower icon"/> 
//       </Flower3>
//       <Flower4>
//         <img src="/flowerBR.svg" alt="Flower icon"/> 
//       </Flower4>
//     </div>
//   )
// }


function FlowerCorner () {
  return (
    <div 
      className='flower-image'>  
        <img src={'../flowerTL.svg'} />
    </div>
    );
}

export default FlowerCorner