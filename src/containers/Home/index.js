import React from 'react'

import HomeLogo from '../../assets/background-home-page.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'


import {
    ContainerBackgroud,
    HomeImg
} from './styles'

export function Home() {
    return (
        <ContainerBackgroud>
            <HomeImg src={HomeLogo} alt='Logo Home' />
            <CategoryCarousel />
            <OffersCarousel />
        </ContainerBackgroud>
    )
}

