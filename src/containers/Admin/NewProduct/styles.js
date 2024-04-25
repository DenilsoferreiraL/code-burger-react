import styled from "styled-components";
import { Button } from '../../../components/Button'

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

form{
    background:#000 ;
    border-radius: 10px ;
    padding: 30px;
    color: #FFFFFF;
}
`
export const Label = styled.p`
font-size: 15px;
margin-bottom:5px ;
`
export const Input = styled.input`
height: 40px;
width:100% ;
margin-bottom: 25px;
background: #FFFFFF;
box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
border-radius: 8px;
border: none;
`
export const ButtonStyles = styled(Button)`
width: 100%;
margin-top: 25px;
`



