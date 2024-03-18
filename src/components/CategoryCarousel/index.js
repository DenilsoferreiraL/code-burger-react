import React, { useEffect, useState } from 'react'

import Category from '../../assets/name-category.svg'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'

import {
    Container,
    CategoryImg,

} from './styles'


function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {

            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={Category} alt='Logo categoria' />
            <Carousel itemsToShow={1}>
                {
                    categories && categories.map(category => (
                        <div div key={category.id} >
                            <img src={category.url} alt='Imagem da catetgoria' />
                            <button src={category.name}></button>
                        </div>
                    ))}
            </Carousel>
        </Container >
    )
}

export default CategoryCarousel