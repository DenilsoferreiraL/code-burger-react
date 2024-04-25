import React from 'react'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import PropTypes from 'prop-types'

import {
    Container, ContainerItems
} from './styles'
import NewProduct from './NewProduct'

export function Admin({ match: { path } }) {

    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {path === paths.Order && <Orders />}
                {path === paths.Products && <ListProducts />}
                {path === paths.NewProduct && <NewProduct />}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        patch: PropTypes.string
    })
}