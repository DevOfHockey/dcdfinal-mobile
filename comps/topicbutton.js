import styled from 'styled-components'; //text & all of button except for img

const DispCont = styled.div`
display: grid;
grid-row-gap: 140px;
grid-column-gap: 40px;
grid-template-rows: 50px 50px 50px;
grid-template-columns: 150px 150px;
justify-content: center;
`;

const TxtCont = styled.div`
text-align: center;
font-weight: 600;
position: relative;
margin-top: -370px;
color: #393B1A;
`;

export default function TopicButton({
    arr=[]
}){
    return <DispCont>
        {
            arr.map((o,i)=><TxtCont>{o} 
            </TxtCont>)
        }
    </DispCont>
}

//CONTINUE FROM HERE, GET BUTTON TO WORK OR DESIGN A EASIER ONE

