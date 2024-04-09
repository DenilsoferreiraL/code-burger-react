import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 12px;
padding: 16px;
border-radius: 30px;
background: #FFFFFF;
box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.10);

div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.quantity-container{
    display: flex;
    gap: 20px;
    flex-direction: row;
    padding: 10px 0 15px;
    justify-content: center;

   button{
    height: 30px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
   }

   p{
    margin-top: 5px;
   }

}

`
export const Image = styled.img`
width: 150px;
border-radius: 10px;
`
export const ProductName = styled.p`
font-size: 16px;
font-style: normal;
line-height: normal;
font-weight: 400;
color: #000;
`
export const ProductPrice = styled.p`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
color: #000;
margin-top: 25px;
`

