import styled from "styled-components";
import Background from '../../assets/background-logo.svg'

export const BackgroundLogin = styled.div`
width: 100%;
    height: 100vh; 
    background: url('${Background}');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: end;
`
export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;

h1{
font-size: 35px;
font-style: normal;
font-weight: 500;
text-align: center;
margin-top: 50px;
}

`

export const ContainerBlur = styled.div`
width: 800px;
height: 100%;
    background-color:rgba(0, 0, 0, 0.7); /* cor de fundo com transparência */
    backdrop-filter: blur(2px); 
    display: flex;
    justify-content: center;

`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 14px;
    color: #ffffff;
    margin: 28px 0 10px 0;
`
export const Input = styled.input`
max-width: 391px;
padding-left: 10px;
width: 100%;
height: 38.319px;
flex-shrink: 0;
border-radius: 5px;
background: #FFF;
box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
`
export const Button = styled.button`
margin-top: 42px;
width: 182.81px;
height: 36.129px;
flex-shrink: 0;
background-color: #FD874C;
color: #ffffff;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-radius: 20px;
border: none;
cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}
`
export const Link = styled.p`
margin-top: 30px;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 16px;
color:#ffffff;

a{
    margin-left: 5px;
text-decoration: underline;
cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}
}

`

