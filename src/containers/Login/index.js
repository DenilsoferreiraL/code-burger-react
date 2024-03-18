import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import Button from '../../components/Button'
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext'

import {
    BackgroundLogin,
    ContainerItens,
    Label,
    Input,
    SignInLink,
    ContainerBlur,
    Error
} from './styles'

import Logo from '../../assets/logo.svg'

function Login() {
    const { putUserData, userData } = useUser()
    console.log(userData)


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

    const onSubmit = async clientData => {

        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados.',
                success: 'Seja bem-vindo(a).',
                error: 'Verifique seu e-mail e senha.'
            }
        )

        putUserData(data)
        
    }

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
                            <Button type='submit' style={{ marginTop: 75 }}>Entrar</Button>
                        </div>
                    </form>
                    <SignInLink>Não possui conta?{' '}
                        <Link style={{ color: 'white' }} to='/cadastro'>Inscrever-se</Link>
                    </SignInLink>
                </ContainerItens>
            </ContainerBlur>
        </BackgroundLogin >
    )
}
export default Login