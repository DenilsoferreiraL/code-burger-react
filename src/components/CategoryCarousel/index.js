import React, { useEffect } from 'react'

import Category from '../../assets/name-category.svg'
import api from '../../services/api'

import {
    Container,
    CategoryImg
} from './styles'


function CategoryCarousel() {
    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('categories')
            console.log(response)
        }
        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={Category} alt='Logo categoria' />
        </Container>
    )
}

export default CategoryCarousel