import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
border-radius: 20px;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
padding: 10px;
width: max-content;
`
export const Header = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 10px;
border-bottom: 1px solid #FD874C;

p{
    font-size: 16px;
    color: #000;
}
`
export const Body = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
width: max-content;
padding: 10px;
grid-gap: 10px 15px;

img{
    border-radius:10px;
    width: 120px;
}

p{
    font-size: 16px;
    color: #000;
    margin-top: 7px;
}

.quantity-container{
display: flex;
   gap: 20px;

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

.trash-product{
    img{
        width: 30px;
        margin-top: 3px;
        cursor: pointer;
    }

    img:hover{
        opacity:0.8 ;
    }

    img:active{
        opacity:0.6 ;
    }
}
`


export const EmptyCart = styled.p`
padding: 20px;
gap: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
font-weight: bold;

img{

    width: 40px;
}
`


