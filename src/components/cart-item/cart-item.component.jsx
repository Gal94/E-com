import React from 'react';
import {CartItemContainer, ItemDetailsContainer, Name, ItemImage} from "./cart-item.styles";

const CartItem = ( {item} ) => {
    const { imageUrl, price, name, quantity } = item;
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt="item"/>
            <ItemDetailsContainer>
                <Name className='name'>{name}</Name>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
};

export default CartItem;