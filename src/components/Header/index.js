import React from 'react'

import Person from '../../assets/user.svg'
import Cart from '../../assets/cart.svg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import {
    Container, ContainerLeft, PageLink, Line, ContainerRight, PageLinkExit, ContainerText

} from './styles'

export function Header() {
    const { push, location: { pathname } } = useHistory()

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
                    <PageLinkExit> Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>

        </Container >
    )
}

