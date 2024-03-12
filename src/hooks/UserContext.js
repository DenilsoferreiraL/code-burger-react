import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const user = { name: 'Denilso', age: 23 }
    const user2 = { name: 'Bianca', age: 24 }

    return (
        <UserContext.Provider value={{ user, user2 }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("userUser must be used with UserContext")
    }
    return context

}


// garantir a integridade e consistência dos dados passados para o componente UserProvider.
UserProvider.propTypes = {
    children: PropTypes.node
}