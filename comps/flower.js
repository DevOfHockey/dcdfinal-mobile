import styled from 'styled-components'; //There's the option to style e.g. flower 1, 2, 3 & 4 (or 10+ things here) & add it as 1 component!

const FlowerTopRight = styled.div`
position:fixed;
margin:0;
padding: 0;

width: 160px;
height: 160px;

top:0;
right:0;
`;

export default function Flower () { //flowertopright is a styled.div, which replaces what would be "flower-div2"
   
   return <FlowerTopRight>
        <img src="/flowerTR.svg" alt="Flower icon"/> 
    </FlowerTopRight>

}

