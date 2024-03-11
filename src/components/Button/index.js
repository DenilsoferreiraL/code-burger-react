import React from 'react'
import { ContainerButton } from './styles'
import PropTypes from 'prop-types'


function Button({ children, ...rest }) {
    return <ContainerButton{...rest}>{children}</ContainerButton>
}

export default Button


Button.propTypes = {
    children: PropTypes.string
}