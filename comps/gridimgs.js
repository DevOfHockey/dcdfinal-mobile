import styled from 'styled-components';

const DispCont = styled.div`
display: grid;
grid-gap: 40px;
grid-template-rows: 150px 150px 150px;
grid-template-columns: 150px 150px;
justify-content: center;
margin-top: 30px;
`;

const ImgCont = styled.div`
`;

const DispImg = styled.img`
width: 140px;
height: 159px;
border-radius: 15px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;

export default function GridImgs({
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