import React from 'react';
import { connect } from 'react-redux';
import CustomButton from "../costum-button/custom-button.component";
import {CartDropdownContainer, CartItemsContainer, EmptyMessage} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from "../../redux/cart/cart.actions";


const Cart = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>

            <CartItemsContainer>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>)
                        :
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItemsContainer>
            <CustomButton onClick={() =>
                {history.push('/checkout');
                dispatch(toggleCartHidden());
                }}> GO TO CHECKOUT </CustomButton>
        </CartDropdownContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(Cart));
//with router passes the match, history and location into the component that is being wrapped.