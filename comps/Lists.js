import styled from "styled-components"

const ItemList = styled.li`
font-size: 12px;
`;

const FooterCont = styled.div`
background: #DDF;
padding:10px;
color: #666;
`;




export function ListFooter () {
    return <FooterCont>
        List footer
    </FooterCont>
}

export function Item ({
    txt="Item #1"
}){
    return <ItemList>
        {txt}
    </ItemList>
}

export default function List({
    arr = [
        "Item 1",
        "Item 2",
        "Item 3"
    ]
}){
    return <div>
        <h1>List</h1>
        <ul>
            {/* <Item txt="Item1"/>
            <Item txt="Item2"/>
            <Item txt="Item3"/> */}
            {arr.map((o,i)=><Item txt={o}/>)}
            {/* the array has multiple balls inside, it takes out each ball and wraps the ball into the item (gift box) the o connects it to the txt */}
        </ul>
        <ListFooter />
    </div>
}