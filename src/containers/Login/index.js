import React from 'react'
import { useForm } from "react-hook-form"

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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <BackgroundLogin>
            <ContainerBlur>
                <ContainerItens>
                    <img src={Logo} alt='Logo' />
                    <h1>Login</h1>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <Label>Email</Label>
                        <Input type='email'{...register("email")} />

                        <Label>Senha</Label>
                        <Input type='password' {...register("password")} />
                        <div>
                            <Button type='submit'>Sign In</Button>
                        </div>
                    </form>
                    <Link>Não possui conta? <a target='blank' href='https://www.google.com/search?q=tradutor&rlz=1C1CHBD_pt-PTBR1068BR1068&oq=trta&gs_lcrp=EgZjaHJvbWUqEQgBEEUYChg7GIMBGLEDGIAEMg4IABBFGDkYQxiABBiKBTIRCAEQRRgKGDsYgwEYsQMYgAQyDwgCEAAYChiDARixAxiABDIJCAMQABgKGIAEMgkIBBAAGAoYgAQyBwgFEAAYgAQyCAgGEAAYAxgKMg8IBxAAGAoYgwEYsQMYgAQyCQgIEAAYChiABDIPCAkQABgKGIMBGLEDGIAE0gEIMTA1NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'>Sing Up</a></Link>
                </ContainerItens>
            </ContainerBlur>
        </BackgroundLogin >
    )
}
export default Login