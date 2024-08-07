import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { PropTypes } from 'prop-types'

import { CardProduct } from '../../components'
import ProductsLogo from '../../assets/background-product.svg'
import formatCurrency from '../../utils/formatCurrency'


import {
    ContainerBackgroud,
    ProductImage,
    CategoryButton,
    CategoriesMenu,
    ProductsContainer
} from './styles'


export function Products({ location: { state } }) {

    let categoryId = 0
    if (state?.categoryId) {
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setfilteredProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(categoryId)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProduct } = await api.get('products')

            const newProducts = allProduct.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setProducts(newProducts)
        }

        loadCategories()
        loadProducts()
    }, [])

    useEffect(() => {
        if (activeCategories === 0) {
            setfilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(product => product.category_id === activeCategories)

            setfilteredProducts(newFilteredProducts)
        }
    }, [activeCategories, products])


    return (
        <ContainerBackgroud>
            <ProductImage src={ProductsLogo} alt='Logo Home' />
            <CategoriesMenu>
                {categories && categories.map(category =>
                    <CategoryButton type="button" isActiveCategory={activeCategories === category.id} onClick={() => { setActiveCategories(category.id) }} key={category.id}>{category.name}</CategoryButton>
                )}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts && filteredProducts.map(product =>
                    <CardProduct key={product.id} product={product} />
                )}
            </ProductsContainer>
        </ContainerBackgroud>
    )
}


Products.propTypes = {
    location: PropTypes.object
}