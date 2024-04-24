import styled from "styled-components";
import ReactSelect from 'react-select'

export const Container = styled.div`
background: #efefef;
min-height: 100vh;

`
export const ProductsImg = styled.img`
width: 70px;
border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
width: 250px;

.css-13cymwt-control{
cursor: pointer;
}
`

export const Menu = styled.div`
display: flex;
gap: 50px;
justify-content: center;
margin: 20px;
`

export const LinkMenu = styled.a`
color: #000;
cursor: pointer;
font-weight: ${props => (props.isActiveStatus ? 'bold' : '300')};
border-bottom: ${props => (props.isActiveStatus ? '2px solid #FD874C' : 'none')};
padding-bottom: 5px;
`
