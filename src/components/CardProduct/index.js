import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button'
import { useCart } from '../../hooks/CartContext'
import formtedCurrency from '../../utils/formatCurrency'


import {
    Container, Image, ProductName, ProductPrice,
} from './styles'


export function CardProduct({ product }) {

    const { putProductsInCart } = useCart()

    const [quantity, setQuantity] = useState(1) // Definindo o valor inicial como 1

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const handleAddToCart = () => {
        putProductsInCart({ ...product, quantity });
    }

    return (
        <Container>
            <Image src={product.url} alt='Imagem do produto' />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formtedCurrency(product.price)}</ProductPrice>
                <div className='quantity-container'>
                    <button onClick={handleDecrease}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <Button onClick={handleAddToCart}>Adicionar</Button>
            </div>
        </Container>
    )

}

CardProduct.propTypes = {
    product: PropTypes.object
}
