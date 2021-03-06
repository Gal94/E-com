//stops the cart state from not needed rendering
import { createSelector } from 'reselect';

//returns a slice of the state I need
const selectCart = state => state.cart;

//createSelector makes it a memoize selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems //from the selector take cart and return that
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden //returns the hidden value
);

//gets invoked in card-icon comp, creates the needed selector and exec
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => //from the selector take the cartItem
        (accumulatedQuantity + cartItem.quantity), 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, cartItem) =>
                (accumulatedQuantity + cartItem.quantity * cartItem.price), 0)
);