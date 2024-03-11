import React from 'react';
import ReactDOM from 'react-dom/client';
// import Login from './containers/Login/index'
import GlobalStyles from './styles/globalStyles'
import Register from './containers/Register/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Register />
        <GlobalStyles />

    </>
);


