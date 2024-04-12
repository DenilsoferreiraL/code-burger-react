import React from 'react'

import CartLogo from '../../assets/background-checkout.svg'
import { CartItems } from '../../components'


import {
    ContainerBackgroud,
    CartImg,
    Wrapper
} from './styles'

export function Cart() {
    return (
        <ContainerBackgroud>
            <CartImg src={CartLogo} />
            <Wrapper>
                <CartItems />
            </Wrapper>
        </ContainerBackgroud>
    )
}

