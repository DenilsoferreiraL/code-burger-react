import React, { useState, useEffect } from 'react'
import { Container, BoxTax } from './styles'
import { Button } from '../Button'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import { toast } from 'react-toastify'

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [totalItemsPrice, setTotalItemsPrice] = useState(0) // Adicionamos um novo estado para o preço total dos itens
    const [includeDelivery, setIncludeDelivery] = useState(true) // Estado para controlar se a taxa de entrega está incluída
    const deliveryTax = 5 // Taxa de entrega fixa

    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setTotalItemsPrice(sumAllItems)
    }, [cartProducts])

    useEffect(() => {
        setFinalPrice(totalItemsPrice + (includeDelivery ? deliveryTax : 0))
    }, [totalItemsPrice, includeDelivery])

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })

        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Realizando seu pedido...',
            success: 'Pedido realizado com sucesso',
            error: 'Falha ao tentar realizar seu pedido, tente novamente'
        })
    }

    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do Pedido</h2>
                    <p className='itens'>Itens</p>
                    <p className='items-price'>{formatCurrency(totalItemsPrice)}</p> {/* Exibe o preço total dos itens */}
                    <p className='delivery-tax'>Taxa de entrega</p>
                    <p className='delivery-tax-price'>{formatCurrency(deliveryTax)}</p>
                </div>
                <div className='container-bottom'>
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice)}</p> {/* Total incluindo a taxa de entrega */}
                </div>
            </Container>
            <BoxTax>
                <input
                    type="checkbox"
                    checked={includeDelivery}
                    onChange={(e) => setIncludeDelivery(e.target.checked)}
                />
                <label>Adicionar taxa de entrega</label>
            </BoxTax>
            <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
                Finalizar Pedido
            </Button>
        </div>
    )
}
