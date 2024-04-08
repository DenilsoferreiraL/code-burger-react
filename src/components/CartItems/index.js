import React from 'react'
import cartEmpty from '../../assets/emptycart.png'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
    Container, Header, Body, EmptyCart

} from './styles'

export function CartItems() {
    const { cartProducts } = useCart()
    return (

        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p style={{ marginLeft: 10 }}>Preço</p>
                <p style={{ paddingRight: 30, marginLeft: 5 }}>Quantidade</p>
                <p style={{ marginLeft: 10 }}>Total</p>
            </Header>

            {
                cartProducts && cartProducts.length > 0 ? (
                    cartProducts.map(product => (
                        <Body key={product.id}>

                            <img src={product.url} alt='Imagem produto' />
                            <p>{product.name}</p>
                            <p>{formatCurrency(product.price)}</p>
                            <div className='quantity-container'>
                                <button>-</button>
                                <p>{product.quantity}</p>
                                <button>+</button>
                            </div>
                            <p>{formatCurrency(product.quantity * product.price)}</p>
                        </Body>
                    ))
                )
                    : (
                        <EmptyCart>Carrinho Vazio<img src={cartEmpty} alt='Cart empty' /></EmptyCart>
                    )
            }

        </Container >
    )
}

