import CartItem from "../../components/cart-item/cart-item.component";

export const addItemToCart = (cartItems, cartItemToAdd) => { //gets the cartItems array and the payload
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id); // Returns true/undefined
    if (existingCartItem) { //increments the duplicated item else adds the payload to the cardItems array
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem);
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }] //return a new array of spreaded item objects.
};

export const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToDecrease.id);
    if (existingCartItem.quantity === 1 ){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id);
    } else {
        return cartItems.map(cartItem => cartItem.id === cartItemToDecrease.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            :
            cartItem
        )
    }
};

