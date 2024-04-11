// import React from 'react'
// import PropTypes from 'prop-types'

// import { Button } from '../Button'
// import { useCart } from '../../hooks/CartContext'

// import {
//     Container, Image, ProductName, ProductPrice,
// } from './styles'


// export function CardProduct({ product }) {

//     const { putProductsInCart, increaseProducts, decreaseProducts } = useCart()

//     return (
//         <Container>
//             <Image src={product.url} alt='Imagem do produto' />
//             <div>
//                 <ProductName>{product.name}</ProductName>
//                 <ProductPrice>{product.formatedPrice}</ProductPrice>
//                 <div className='quantity-container'>
//                     <button onClick={() => decreaseProducts(product.id)}>-</button>
//                     <p>{product.quantity}</p>
//                     <button onClick={() => increaseProducts(product.id)}>+</button>
//                 </div>
//                 <Button onClick={() => putProductsInCart(product)} >Adicionar</Button>
//             </div>
//         </Container>
//     )

// }

// CardProduct.propTypes = {
//     product: PropTypes.object
// }


import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button'
import { useCart } from '../../hooks/CartContext'

import {
    Container, Image, ProductName, ProductPrice,
} from './styles'


export function CardProduct({ product }) {

    const { putProductsInCart, increaseProducts, decreaseProducts } = useCart()

    const [quantity, setQuantity] = useState(product.quantity || 0)

    useEffect(() => {
        setQuantity(product.quantity || 0)
    }, [product.quantity])

    const handleDecrease = () => {
        if (quantity > 0) {
            decreaseProducts(product.id)
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    const handleIncrease = () => {
        increaseProducts(product.id)
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    return (
        <Container>
            <Image src={product.url} alt='Imagem do produto' />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <div className='quantity-container'>
                    <button onClick={handleDecrease}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
            </div>
        </Container>
    )

}

CardProduct.propTypes = {
    product: PropTypes.object
}