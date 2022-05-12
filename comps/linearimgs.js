import styled from "styled-components";

const DispCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
margin-top: 20px;
`;

const ImgCont = styled.div`
justify-content: center;
align-self: center;
width: 300px;
border-radius: 15px;
`;

const DispImg = styled.img`
width: 300px;
height: 100px;
border-radius: 15px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;


export default function LinearImgs({
    arr=[]
}){
    return <DispCont>
    {
        arr.map((o,i)=><ImgCont>
            <DispImg src={o} height={180} />
        </ImgCont>)
    }
</DispCont>
}