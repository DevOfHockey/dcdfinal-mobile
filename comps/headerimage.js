import styled from 'styled-components';

const DispCont = styled.div`
display: flex;
justify-content:center;
align-items: center;
margin-left: auto;
margin-right: auto;
`;

const ImgCont = styled.div`
`;

const DispImg = styled.img`
  width: 318px;
  height: 240px;
  border-radius: 24px;
  border: 2px solid rgba(142, 142, 142, 0.5);
`;

export default function HeaderImgs({
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