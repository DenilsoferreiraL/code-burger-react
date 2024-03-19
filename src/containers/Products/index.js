import React, { useEffect, useState } from 'react'
import ProductsLogo from '../../assets/background-product.svg'
import api from '../../services/api'

import {
    ContainerBackgroud,
    ProductImage,
    CategoryButton,
    CategoriesMenu
} from './styles'


function Products() {
    const [categories, setCategories] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }

        loadCategories()
    }, [])

    return (
        <ContainerBackgroud>
            <ProductImage src={ProductsLogo} alt='Logo Home' />
            <CategoriesMenu>
                {categories && categories.map(category =>
                    <CategoryButton type="button" isActiveCategory={activeCategories === category.id} onClick={() => { setActiveCategories(category.id) }} key={category.id}>{category.name}</CategoryButton>
                )}
            </CategoriesMenu>
        </ContainerBackgroud>
    )
}

export default Products