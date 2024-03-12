import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    const putUserData = async userInfo => {
        setUserData(userInfo)
        //Gravar no localStorage
        await localStorage.setItem('codeburger: userData', JSON.stringify(userInfo))
    }
    //Recuperar dados do localStorage
    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('codeburger: userData') 
            // Se encontrar o cadastro, carrega os dados
            if (clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
        }
        loadUserData()
    }, [])

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