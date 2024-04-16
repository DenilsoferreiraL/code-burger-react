import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CardProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const updateLocalStorage = async products => {
        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
    }

    const putProductsInCart = async product => {

        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = cartProducts

        if (cartIndex >= 0) {
            newCartProducts[cartIndex].quantity += product.quantity
        } else {
            product.quantity = product.quantity || 1
            newCartProducts.push(product)
        }

        setCartProducts(newCartProducts)
        await updateLocalStorage(newCartProducts)
    }

    //função para deletar o produto
    const deleteProduct = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)

        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }

    // função para aumentar a quantidade de produtos no carrinho.
    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        })
        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }

    // função para diminuir a quantidade de produtos no carrinho.
    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
            })

            setCartProducts(newCart)

            await updateLocalStorage(newCart)
        }
    }

    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }
        loadUserData()
    }, [])

    return (
        <CartContext.Provider value={{ putProductsInCart, cartProducts, increaseProducts, decreaseProducts, deleteProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {

    const context = useContext(CartContext)

    if (!context) {
        throw new Error("userCart must be used with CartContext")
    }
    return context

}

CardProvider.propTypes = {
    children: PropTypes.node
}