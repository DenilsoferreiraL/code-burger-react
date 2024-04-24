import React from 'react'
// import Orders from './Orders'
import ListProducts from './ListProducts'
import { SideMenuAdmin } from '../../components/SideMenuAdmin'

import {
    Container

} from './styles'

export function Admin() {

    return (
        <Container>
            <SideMenuAdmin />
            {/* <Orders /> */}
            <ListProducts/>
        </Container>
    )
}

