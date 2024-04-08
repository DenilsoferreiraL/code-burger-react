import React from 'react'

import CartLogo from '../../assets/background-checkout.svg'
import { CartItems } from '../../components'


import {
    ContainerBackgroud,
    CartImg
} from './styles'

export function Cart() {
    return (
        <ContainerBackgroud>
            <CartImg src={CartLogo} />
            <CartItems />
        </ContainerBackgroud>
    )
}

