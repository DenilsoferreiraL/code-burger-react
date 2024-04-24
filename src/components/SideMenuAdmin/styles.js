import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Container = styled.div`
background: #000;
box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
width: 300px;
top:0;
left: 0;

hr{
    margin: 50px 15px;
}
`
export const ItemContainer = styled.div`
display: flex;
align-items: center;
padding-left: 20px;
height: 60px;
border-radius: 2px;
background:${props => (props.isActive ? '#565656' : 'none')};
margin: 18px;

.icon{
    color: #FFFFFF;
}
`

export const ListLink = styled(Link)`
color: #FFFFFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 10px;
text-decoration: none;
`
