import React, { useEffect, useState } from 'react'
import api from '../../../services/api'

import {
    Container

} from './styles'

function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders')

            console.log(orders)
            setOrders(data)
        }

        loadOrders()
    }, [])

    return (
        <Container>
            <h1>Pedidos</h1>
        </Container>
    )
}
export default Orders   