import styled from 'styled-components';

const DispCont = styled.div`
display: grid;
grid-gap: 50px;
grid-template-rows: 50px 50px 50px;
grid-template-columns: 150px 150px;
justify-content: center;
`;

const TxtCont = styled.div`
text-align: center;
font-weight: 600;
`;

export default function GridTxt({
    arr=[]
}){
    return <DispCont>
        {
            arr.map((o,i)=><TxtCont>{o} 
            </TxtCont>)
        }
    </DispCont>
}