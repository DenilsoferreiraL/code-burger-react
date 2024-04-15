import React from 'react'

import Person from '../../assets/user.svg'
import Cart from '../../assets/cart.svg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useUser } from '../../hooks/UserContext'

import {
    Container, ContainerLeft, PageLink, Line, ContainerRight, PageLinkExit, ContainerText

} from './styles'

export function Header() {
    const {logout} = useUser()
    const { push, location: { pathname } } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>
                    Ver Produtos
                </PageLink>
            </ContainerLeft >
            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt='Carrinho' />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt='Usuário' />
                </PageLink>
                <ContainerText>
                    <p>Olá, Denilso</p>
                    <PageLinkExit onClick={logoutUser}> Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>

        </Container >
    )
}

