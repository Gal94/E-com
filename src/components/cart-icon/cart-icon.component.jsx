import React from 'react';
import {CartContainer, ShoppingIcon, ItemCountContainer} from "./cart-icon.styles";
import { connect } from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () =>dispatch(toggleCartHidden())
});

//selector - sums all the items in the cart.
//reduce selector - a portion of the state object
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect (mapStateToProps, mapDispatchToProps)(CartIcon);