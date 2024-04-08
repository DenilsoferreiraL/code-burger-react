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
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.legth > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>

                        <img src={product.url} alt='Imagem produto' />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <p>{product.quantity}</p>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))
            )
                : (
                    <EmptyCart>Carrinho Vazio<img src={cartEmpty} alt='Cart empty' /></EmptyCart>
                )}

        </Container>
    )
}

