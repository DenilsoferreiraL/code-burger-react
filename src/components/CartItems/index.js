// import React from 'react'
// import cartEmpty from '../../assets/emptycart.png'
// import trashCart from '../../assets/trashcart.png'
// import { useCart } from '../../hooks/CartContext'
// import formatCurrency from '../../utils/formatCurrency'
// import {
//     Container, Header, Body, EmptyCart

// } from './styles'

// export function CartItems() {
//     const { cartProducts, increaseProducts, decreaseProducts, deleteProduct } = useCart()
//     return (

//         <Container>
//             <Header>
//                 <p></p>
//                 <p>Itens</p>
//                 <p style={{ marginLeft: 10 }}>Preço</p>
//                 <p style={{ paddingRight: 30, marginLeft: 5 }}>Quantidade</p>
//                 <p style={{ marginLeft: 10 }}>Total</p>
//                 <p></p>
//             </Header>

//             {
//                 cartProducts && cartProducts.length > 0 ? (
//                     cartProducts.map(product => (
//                         < Body key={product.id} >

//                             <img src={product.url} alt='Imagem produto' />
//                             <p>{product.name}</p>
//                             <p>{formatCurrency(product.price)}</p>

//                             <div className='quantity-container'>
//                                 <button onClick={() => decreaseProducts(product.id)}>-</button>
//                                 <p>{product.quantity}</p>
//                                 <button onClick={() => increaseProducts(product.id)}>+</button>
//                             </div>
//                             <p>{formatCurrency(product.quantity * product.price)}</p>
//                             <div className='trash-product'>
//                                 <img onClick={() => deleteProduct(product.id)} src={trashCart} alt='Lixeira'></img>
//                             </div>
//                         </Body>

//                     ))
//                 )
//                     : (

//                         <EmptyCart>Carrinho Vazio<img src={cartEmpty} alt='Cart empty' /></EmptyCart>
//                     )
//             }
//         </Container >
//     )
// }

import React from 'react';
import cartEmpty from '../../assets/emptycart.png';
import trashCart from '../../assets/trashcart.png';
import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { Container, Header, Body, EmptyCart } from './styles';

export function CartItems() {
    const { cartProducts, increaseProducts, decreaseProducts, deleteProduct } = useCart();

    return (
        <Container>
            {cartProducts && cartProducts.length > 0 && (
                <Header>
                    <p></p>
                    <p>Itens</p>
                    <p style={{ marginLeft: 10 }}>Preço</p>
                    <p style={{ paddingRight: 30, marginLeft: 5 }}>Quantidade</p>
                    <p style={{ marginLeft: 10 }}>Total</p>
                    <p></p>
                </Header>
            )}

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} alt='Imagem produto' />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className='quantity-container'>
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                        <div className='trash-product'>
                            <img onClick={() => deleteProduct(product.id)} src={trashCart} alt='Lixeira'></img>
                        </div>
                    </Body>
                ))
            ) : (
                <EmptyCart>Carrinho Vazio<img src={cartEmpty} alt='Cart empty' /></EmptyCart>
            )}
        </Container>
    );
}
