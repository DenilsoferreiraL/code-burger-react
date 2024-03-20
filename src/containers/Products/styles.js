import styled from "styled-components";

export const ContainerBackgroud = styled.div`
background: #EFEFEF;
`
export const ProductImage = styled.img`
width: 100%;
`

export const CategoriesMenu = styled.div`
display: flex;
justify-content:center;
gap: 50px;
margin-top: 20px;


`

export const CategoryButton = styled.button`
cursor: pointer;
background: none;
border: none;
border-bottom:${props => props.isActiveCategory && '2px solid #FD874C'};
color:${props => props.isActiveCategory ? '#FD874C' : ' #9a9a9d'};
font-size: 17px;
line-height: 20px;
transition: all 0.2 ease -in -out;
`

export const ProductsContainer = styled.div`
display: grid;
margin-top: 20px;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 40px;
justify-items: center;
`