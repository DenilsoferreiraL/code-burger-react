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


form{
    width: auto;
    display: flex;
    flex-direction: column;
    text-align: start;
}

div{
    display: flex;
    justify-content: center;
}

h1{
font-size: 40px;
font-style: normal;
font-weight: 500;
text-align: center;
margin-top: 30px;
}

`

export const ContainerBlur = styled.div`
width: 100%;
    background-color:rgba(0, 0, 0, 0.6); /* cor de fundo com transparência */
    
    display: flex;
    justify-content: center;

`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
    margin:35px 0 10px 0;
`

export const Input = styled.input`
padding-left: 10px;
width: 480px;
height: 50px;
flex-shrink: 0;
border-radius: 5px;
background: #FFF;
box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
font-size: 22px;
border: ${props => props.error ? '3px solid #CC1717' : 'none'};
`

export const SignInLink = styled.p`
margin-top: 25px;
font-size: 15px;
font-style: normal;
font-weight: 300;
line-height: 16px;
color:#ffffff;
`

