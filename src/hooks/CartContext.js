import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CardProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const putProductsInCart = async product => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = 1

        if (cartIndex > 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)

        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }
        await localStorage.setItem('codeburger: cartInfo', JSON.stringify(newCartProducts))
    }

    //função para deletar o produto
    const deleteProduct = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)

        setCartProducts(newCart)

        await localStorage.setItem('codeburger: cartInfo', JSON.stringify(newCart))
    }

    // função para aumentar a quantidade de produtos no carrinho.
    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        })
        setCartProducts(newCart)

        await localStorage.setItem('codeburger: cartInfo', JSON.stringify(newCart))
    }

    // função para diminuir a quantidade de produtos no carrinho.
    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
            })

            setCartProducts(newCart)

            await localStorage.setItem('codeburger: cartInfo', JSON.stringify(newCart))
        }
    }

    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger: cartInfo')

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