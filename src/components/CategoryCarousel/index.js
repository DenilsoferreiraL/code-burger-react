import React from 'react'

import Category from '../../assets/name-category.svg'


import {
    Container,
    HomeImg
} from './styles'


function CategoryCarousel() {
    return (
        <Container>
            <HomeImg>{Category}</HomeImg>
        </Container>
    )
}

export default CategoryCarousel