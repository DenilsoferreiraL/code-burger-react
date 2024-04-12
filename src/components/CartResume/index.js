import React, { useState, useEffect } from 'react'
import { Container, BoxTax } from './styles'
import { Button } from '../Button'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import { toast } from 'react-toastify'


export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [includeDelivery, setIncludeDelivery] = useState(true) // Estado para controlar se a taxa de entrega está incluída
    const deliveryTax = 5 // Taxa de entrega fixa

    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems + (includeDelivery ? deliveryTax : 0)) // Adiciona a taxa de entrega se estiver marcado

    }, [cartProducts, includeDelivery])

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
                    <p className='items-price'>{formatCurrency(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de entrega</p>
                    <p className='delivery-tax-price'>{formatCurrency(deliveryTax)}</p>
                </div>
                <div className='container-bottom'>
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice)}</p> {/* Total sem a taxa de entrega */}
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

