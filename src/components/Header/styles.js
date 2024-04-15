import styled from "styled-components";

export const Container = styled.div`
height: 72px;
background-color: #ffffff;
box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
`
export const ContainerLeft = styled.div`
display: flex;
gap: 30px;
`
export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
color: ${props => props.isActive ? '#FD874C' : '#000'} ;
font-size: 16px;
line-height: 19px;
font-weight:${props => props.isActive ? 'bold' : 'normal'} ;
`
export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

export const Line = styled.div`
height: 40px;
border-right: 0.5px  solid #BABABA;  ;
`
export const PageLinkExit = styled.a`
color: #FD874C;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const ContainerText = styled.div`

 p{
color: #020202;
font-size: 14px;
font-style: normal;
font-weight: 300;
 }
`


