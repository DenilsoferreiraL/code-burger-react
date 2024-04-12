import React from 'react'

import CartLogo from '../../assets/background-checkout.svg'
import { CartItems, CartResume } from '../../components'


import {
    ContainerBackgroud,
    CartImg,
    Wrapper,
} from './styles'

export function Cart() {
    return (
        <ContainerBackgroud>
            <CartImg src={CartLogo} alt='logo' />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </ContainerBackgroud>
    )
}

