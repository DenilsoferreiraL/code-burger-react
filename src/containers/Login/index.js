import React from 'react'
import {
    BackgroundLogin,
    ContainerItens,
    Label,
    Input,
    Button,
    Link, ContainerBlur
} from './styles'

import Logo from '../../assets/logo.svg'

function Login() {
    return (
        <BackgroundLogin>
            <ContainerBlur>
                <ContainerItens>
                    <img src={Logo} alt='Logo' />
                    <h1>Login</h1>
                    <Label>Email</Label>
                    <Input />
                    <Label>Password</Label>
                    <Input />

                    <Button>Sign In</Button>
                    <Link>Não possui conta? <a href='https://www.youtube.com/watch?v=U12lNcw2YH4&list=PLkmvzjfwDrWP3_6s71SFsRkxUCS3qBXjh&index=2'>Sing Up</a></Link>
                </ContainerItens>
            </ContainerBlur>
        </BackgroundLogin>
    )
}
export default Login