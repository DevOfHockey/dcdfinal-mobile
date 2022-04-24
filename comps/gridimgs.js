export default function GridImgs({
    arr=[]
}){
    return <div>
        {
            arr.map((o,i)=><img src={o} height={180} />)
        }
    </div>
}