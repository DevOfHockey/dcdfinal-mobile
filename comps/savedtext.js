import styled from 'styled-components';

const DispCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
gap: 100px;
`;

const TxtCont = styled.div`
text-align: center;
font-weight: 700;
font-size: 24px;
color: white;
position: relative;
top: -440px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default function SavedTxt({
    arr=[]
}){
    return <DispCont>
        {
            arr.map((o,i)=><TxtCont>{o} 
            </TxtCont>)
        }
    </DispCont>
}