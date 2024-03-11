import React from 'react'
import { useForm } from "react-hook-form"
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"



import {
    BackgroundLogin,
    ContainerItens,
    Label,
    Input,
    Button,
    Link, ContainerBlur, Error
} from './styles'

import Logo from '../../assets/logo.svg'

function Login() {

    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido.").required("O e-mail é obrigatório."),
        password: Yup.string().required("A senha é obrigatório.").min(6, "A senha deve ter no mínimo 6 dígitos.")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = data => console.log(data)

    return (
        <BackgroundLogin>
            <ContainerBlur>
                <ContainerItens>
                    <img src={Logo} alt='Logo' />
                    <h1>Login</h1>

                    <form noValidate onSubmit={handleSubmit(onSubmit)} >

                        <Label>Email</Label>
                        <Input type='email'{...register("email")} error={errors.email?.message} />
                        <Error>{errors.email?.message}</Error>

                        <Label>Senha</Label>
                        <Input type='password' {...register("password")} error={errors.password?.message} />
                        <Error>{errors.password?.message}</Error>

                        <div>
                            <Button type='submit'>Sign In</Button>
                        </div>
                    </form>
                    <Link>Não possui conta? <a href='https://www.google.com/search?q=tradutor&rlz=1C1CHBD_pt-PTBR1068BR1068&oq=trta&gs_lcrp=EgZjaHJvbWUqEQgBEEUYChg7GIMBGLEDGIAEMg4IABBFGDkYQxiABBiKBTIRCAEQRRgKGDsYgwEYsQMYgAQyDwgCEAAYChiDARixAxiABDIJCAMQABgKGIAEMgkIBBAAGAoYgAQyBwgFEAAYgAQyCAgGEAAYAxgKMg8IBxAAGAoYgwEYsQMYgAQyCQgIEAAYChiABDIPCAkQABgKGIMBGLEDGIAE0gEIMTA1NGowajeoAgCwAgA' target="_blank" rel="noreferrer">Sign Up</a>
                    </Link>
                </ContainerItens>
            </ContainerBlur>
        </BackgroundLogin >
    )
}
export default Login