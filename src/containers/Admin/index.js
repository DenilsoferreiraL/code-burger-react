import React from 'react'
// import Orders from './Orders'
import ListProducts from './ListProducts'
import { SideMenuAdmin } from '../../components/SideMenuAdmin'

import {
    Container,ContainerItems
} from './styles'

export function Admin() {

    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                {/* <Orders /> */}
                <ListProducts />
            </ContainerItems>
        </Container>
    )
}

