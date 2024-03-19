import React from 'react'
import HomeLogo from '../../assets/background-home-page.svg'
import CategoryCarousel from '../../components/CategoryCarousel'

import {
    ContainerBackgroud,
    HomeImg
} from './styles'
import OffersCarousel from '../../components/OffersCarousel'


function Home() {
    return (
        <ContainerBackgroud>
            <HomeImg src={HomeLogo} alt='Logo Home' />
            <CategoryCarousel />
            <OffersCarousel />
        </ContainerBackgroud>
    )
}

export default Home