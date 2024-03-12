import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import Button from '../../components/Button'
import { toast } from 'react-toastify';

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

function Register() {

    const schema = Yup.object().shape({
        name: Yup.string().required('O seu nome é obrigatório.'),
        email: Yup.string().email("Digite um e-mail válido.").required("O e-mail é obrigatório."),
        password: Yup.string().required("A senha é obrigatório.").min(6, "A senha deve ter no mínimo 6 dígitos."),
        confirmPassword: Yup.string().required("A senha é obrigatório.").oneOf([Yup.ref('password')], 'As senhas deve ser iguais.')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async clientData => {
        try {
            const { status } = await api.post('users', {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password
            }, { validateStatus: () => true })

            if (status === 201 || status === 200) {
                toast.success('Criado com sucesso.', {
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else if (status === 409) {
                toast.error('E-mail já cadastrado! Faça login para continuar.')
            } else {
                throw new Error()
            }

        } catch (err) {
            toast.error("Falaha no sistema! Tente novamente.")
        }

    }

    return (
        <BackgroundLogin>
            <ContainerBlur>
                <ContainerItens>
                    <img src={Logo} alt='Logo' />
                    <h1>Cadastre-se</h1>

                    <form noValidate onSubmit={handleSubmit(onSubmit)} >

                        <Label>Nome</Label>
                        <Input type='text'{...register("name")} error={errors.name?.message} />
                        <Error>{errors.name?.message}</Error>

                        <Label>Email</Label>
                        <Input type='email' {...register("email")} error={errors.email?.message} />
                        <Error>{errors.email?.message}</Error>

                        <Label>Senha</Label>
                        <Input type='password' {...register("password")} error={errors.password?.message} />
                        <Error>{errors.password?.message}</Error>

                        <Label>Confirmar Senha</Label>
                        <Input type='password' {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                        <Error>{errors.confirmPassword?.message}</Error>
                        <div>
                            <Button type='submit' style={{ marginTop: 25 }}>Entrar</Button>
                        </div>
                    </form>
                    <SignInLink>Já possui conta?{' '}
                        <Link style={{ color: 'white' }} to='/login'>Entrar</Link>
                    </SignInLink>
                </ContainerItens>
            </ContainerBlur>
        </BackgroundLogin >
    )
}
export default Register