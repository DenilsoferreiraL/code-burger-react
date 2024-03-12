import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    const putUserData = (userInfo) => {
        setUserData(userInfo)
    }

    return (
        <UserContext.Provider value={{ putUserData, userData }}>
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