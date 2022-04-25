import styled from 'styled-components';

const DispCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const TxtCont = styled.div`
text-align: center;
font-weight: 700;
font-size: 24px;
color: white;
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