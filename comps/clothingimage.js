import styled from 'styled-components';

const DispCont = styled.div`
display: grid;
row-gap: 40px;
column-gap: 30px;
grid-template-rows: 150px 150px 150px;
grid-template-columns: 150px 150px;
justify-content: center;
margin-top: 5px;
`;

const ImgCont = styled.div`
margin-left: auto;
margin-right: auto;
`;

const DispImg = styled.img`
width: 150px;
height: 150px;
border-radius: 15px;
border: 1px solid rgba(57, 59, 26, 0.5);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;

export default function ClothingImgs({
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