import { CartItemContainer, ImageContainer, ItemDetailsContainer, NameContainer } from './cart-item.styles.jsx'; 

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <ImageContainer src={imageUrl} alt="cart-item" />
            <ItemDetailsContainer>
                <NameContainer>{ name }</NameContainer>
                <br />
                <span>{quantity} x ${ price }</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;