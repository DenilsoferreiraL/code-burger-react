import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
// import Login from './containers/Login/index'
import GlobalStyles from './styles/globalStyles'
import Register from './containers/Register/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Register />
        <ToastContainer autoClose={2000} />
        <GlobalStyles />

    </>
);


