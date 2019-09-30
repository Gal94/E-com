import {CartActionTypes} from "./cart.types";

//no need payload because we toggle between true and false
export const toggleCartHidden = ()=> ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});