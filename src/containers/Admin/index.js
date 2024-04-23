import React from 'react'
import Orders from './Orders'
import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import {
    Container

} from './styles'

export function Admin() {

    return (
        <Container>
            <SideMenuAdmin />
            <Orders />
        </Container>
    )
}

