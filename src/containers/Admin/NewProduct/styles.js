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

export const LabelUpload = styled.label`
cursor: pointer;
display: flex;
align-items: center;
border: 1px dashed #FFFFFF;
padding: 10px;
margin-bottom: 25px;
gap: 10px;

input{
    opacity: 0;
    width: 1px;
}

`

export const Input = styled.input`
height: 40px;
min-width: 280px;
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



