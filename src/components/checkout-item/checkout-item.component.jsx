import { addToCart, clearFromCart, removeFromCart } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';
import { CheckoutItemContainer, 
         ImageContainer, 
         StyledImage, 
         NameContainer, 
         QuantityContainer, 
         ArrowContainer, 
         ValueContainer, 
         PriceContainer,
         RemoveButtonContainer } from './checkout-item.styles.jsx';

const mapDispatchToProps = dispatch => {
    return {
        clearCartItem: item => dispatch(clearFromCart(item)),
        addItemToCart: item => dispatch(addToCart(item)),
        removeItemFromCart: item => dispatch(removeFromCart(item))
    };
}

const CheckoutItem = ({ cartItem, cartItem: { name, imageUrl, quantity, price }, clearCartItem, addItemToCart, removeItemFromCart }) => {
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <StyledImage src={ imageUrl } alt="item" />
            </ImageContainer>
            <NameContainer>{ name }</NameContainer>
            <QuantityContainer>
                <ArrowContainer onClick={() => removeItemFromCart(cartItem)}>&#10094;</ArrowContainer>
                <ValueContainer>{ quantity }</ValueContainer>
                <ArrowContainer onClick={() => addItemToCart(cartItem)}>&#10095;</ArrowContainer>
            </QuantityContainer>
            <PriceContainer>${ price }</PriceContainer>
            <RemoveButtonContainer onClick={() => clearCartItem(cartItem)} >&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}

export default connect(null, mapDispatchToProps)(CheckoutItem);