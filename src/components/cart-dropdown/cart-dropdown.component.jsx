import React from 'react';
import { connect } from 'react-redux';
import CustomButton from "../costum-button/custom-button.component";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/cart-item.component";

const Cart = ({ cartItems }) => {
    return(
        <div className='cart-dropdown'>

            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id} />)
                }
            </div>
            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    )};

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems
});

export default connect(mapStateToProps)(Cart);