import React from 'react'
import Login from '../containers/Login'
import Register from '../containers/Register'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
            </Switch>
        </Router>
    )
}

export default Routes