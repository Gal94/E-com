import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import { selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { HeaderBlock, CheckoutPageContainer, StripeButton, TotalContainer, WarningContainer} from "./checkout.styles";

const CheckoutPage = ({cartItems, total})  =>(
    <CheckoutPageContainer>
        <HeaderBlock className='checkout-header'>
            <div>
                <span>Product</span>
            </div>
            <div>
                <span>Description</span>
            </div>
            <div>
                <span>Quantity</span>
            </div>
            <div>
                <span>Price</span>
            </div>
            <div>
                <span>Remove</span>
            </div>
        </HeaderBlock>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }

        <TotalContainer>
            <span className='total'>TOTAL: ${total}</span>
        </TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - Exp: 01:22 - CVV: 123
        </WarningContainer>
        <StripeButton price={total}/>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);