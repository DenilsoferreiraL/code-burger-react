import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);

.container-top{
display: grid;
grid-gap: 10px 50px;
grid-template-areas: 
'title title'
'items items-price'
'delivery-tax delivery-tax-price';

.title{
    grid-area: title;
    margin-bottom: 20px;
}
.items{
    grid-area: items;
}
.items-price{
    grid-area: items-price;
}
.delivery-tax{
    grid-area: delivery-tax;
}

.delivery-tax-price{
    grid-area: delivery-tax-price;
}

}

.container-bottom{
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 24px;
margin-top: 50px;
}
`

export const BoxTax = styled.div`
margin-top: 20px;
display: flex;
justify-content:center ;
align-items: center;

input{
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
}

label {
    padding: 15px;
    font-weight: bolder;
    font-size: 18px;
}
`




