import styled from "styled-components";

export const Container = styled.div`
width: max-content;
background-color: #efefef;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
padding: 40px 0;

.rec.rec-arrow{
    background-color: #FD874C;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;

    &:hover{
      border:2px solid #FD874C ;
      background-color: #efefef;
      color: #FD874C;
    }
}

.rec.rec-arrow:disabled{
    border:none;
    background-color:#bebebf;
    color: #efefef;
}
`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const CategoryImg = styled.img`

`

export const Image = styled.img`
width: 250px;
border-radius: 10px;
`
export const Button = styled.button`
margin: 16px 0;
padding: 21px 48px;
width: 100%;
flex-shrink: 0;
background-color: #FD874C;
color: #000;
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-radius: 20px;
border: none;
cursor: pointer;
transition: all 0.1s ease-in-out;

&:hover{
   
      background-color: #efefef;
      color: #FD874C;
}

&:active{
    opacity: 0.6;
    color: #000;
    transform: scale(1.2)
}
`


