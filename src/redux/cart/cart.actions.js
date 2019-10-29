import {CartActionTypes} from "./cart.types";

//no need payload because we toggle between true and false
export const toggleCartHidden = ()=> ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//takes an item object, and assigns it to the payload key
export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const decreaseItem = (item) => ({
    type: CartActionTypes.DECREASE_ITEM,
    payload: item
});