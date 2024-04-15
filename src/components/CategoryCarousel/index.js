import React, { useEffect, useState } from 'react'

import Category from '../../assets/name-category.svg'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'


import {
    Container,
    CategoryImg,
    ContainerItens,
    Image,
    Button

} from './styles'


export function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {

            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ]

    return (
        <Container>
            <CategoryImg src={Category} alt='Logo categoria' />
            <Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints}>
                {
                    categories && categories.map(category => (
                        <ContainerItens div key={category.id} >
                            <Image src={category.url} alt='Imagem da catetgoria' />
                            <Button to={{
                                pathname:'/produtos',
                               state:{categoryId: category.id}
                            }}>{category.name}</Button>
                        </ContainerItens>
                    ))}
            </Carousel>
        </Container >
    )
}

