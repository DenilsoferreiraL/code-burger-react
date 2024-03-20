import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import CardProduct from '../../components/CardProduct'
import ProductsLogo from '../../assets/background-product.svg'


import {
    ContainerBackgroud,
    ProductImage,
    CategoryButton,
    CategoriesMenu, ProductsContainer
} from './styles'


function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data } = await api.get('products')



            setProducts(data)
        }

        loadCategories()
        loadProducts()
    }, [])

    return (
        <ContainerBackgroud>
            <ProductImage src={ProductsLogo} alt='Logo Home' />
            <CategoriesMenu>
                {categories && categories.map(category =>
                    <CategoryButton type="button" isActiveCategory={activeCategories === category.id} onClick={() => { setActiveCategories(category.id) }} key={category.id}>{category.name}</CategoryButton>
                )}
            </CategoriesMenu>
            <ProductsContainer>
                {products && products.map(product =>
                    <CardProduct key={product.id} product={product} />
                )}
            </ProductsContainer>
        </ContainerBackgroud>
    )
}

export default Products