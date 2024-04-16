import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Header } from '../components/Header'


function PrivateRoute({ component, ...rest }) {
    // Verifica se há um usuário autenticado armazenado no localStorage
    const user = localStorage.getItem('codeburger:userData')

    // Se não houver usuário, redireciona para a página de login
    if (!user) {
        return <Redirect to="/login" />
    }
    // Se houver usuário, renderiza a rota correspondente
    return (
        <>
            <Header />
            <Route {...rest} component={component} />
        </>
        )
}

export default PrivateRoute

// Define os tipos das propriedades esperadas pelo componente
PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}