import React from "react";

import PropTypes from 'prop-types'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
    <UserProvider>
        {children}
    </UserProvider>
)

export default AppProvider

AppProvider.propTypes = {
children: PropTypes.node
}