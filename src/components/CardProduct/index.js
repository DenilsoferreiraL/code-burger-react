import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import { useCart } from '../../hooks/CartContext';
import formattedCurrency from '../../utils/formatCurrency'; // Corrigido o nome do utilitário

import {
    Container, Image, ProductName, ProductPrice,
} from './styles';

export function CardProduct({ product }) {
    const { push } = useHistory();
    const { putProductsInCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleAddToCart = () => {
        putProductsInCart({ ...product, quantity });
        push('/carrinho'); // Redirecionamento para o carrinho
    };

    return (
        <Container>
            <Image src={product.url} alt='Imagem do produto' />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formattedCurrency(product.price)}</ProductPrice> {/* Corrigido o nome da função */}
                <div className='quantity-container'>
                    <button onClick={handleDecrease}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <Button onClick={handleAddToCart}>Adicionar</Button>
            </div>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object.isRequired, // Definido como obrigatório
};
