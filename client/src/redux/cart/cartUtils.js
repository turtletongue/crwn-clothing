export const appendItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => (cartItem.id === cartItemToAdd.id) ?
                 { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem 
            
        );
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
}

export const clearCartItem = (cartItems, cartItemToDelete) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.map(cartItem => (cartItem.id === cartItemToRemove.id) ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem 
    ).filter(cartItem => cartItem.quantity > 0);
}