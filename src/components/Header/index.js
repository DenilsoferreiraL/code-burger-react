import React from 'react'

import Person from '../../assets/user.svg'
import Cart from '../../assets/cart.svg'

import {
    Container, ContainerLeft, PageLink, ContainerRight, ContainerText

} from './styles'

export function Header() {
    return (
        <Container>
            <ContainerLeft>
                <PageLink>
                    Home
                </PageLink>
                <PageLink>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>
            <ContainerRight>
                <PageLink>
                    <img src={Cart} alt='Carrinho' />
                </PageLink>
                <div></div>
                <PageLink>
                    <img src={Person} alt='Usuário' />
                </PageLink>
                <ContainerText>
                    <p>Olá, Denilso</p>
                    <PageLink> Sair</PageLink>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}

