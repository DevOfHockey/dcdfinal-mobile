import styled from 'styled-components';

const DispCont = styled.div`
display: grid;
grid-row-gap: 140px;
grid-column-gap: 30px;
grid-template-rows: 50px 50px 50px;
grid-template-columns: 150px 150px;
justify-content: center;
`;

const TxtCont = styled.div`
text-align: center;
font-family: 'Open Sans';
font-weight: 600;
position: relative;
margin-top: -375px;
color: #393B1A;
`;

export default function ClothingTxt({
    arr=[]
}){
    return <DispCont>
        {
            arr.map((o,i)=><TxtCont>{o} 
            </TxtCont>)
        }
    </DispCont>
}