import CartItem from '../cart-item/cart-item.component.jsx';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CustomButtonContainer } from './cart-dropdown.styles.jsx';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer cartItemsLength={cartItems.length}>
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButtonContainer onClick={ () => {
                dispatch(toggleCartHidden());
                history.push(`/checkout`);
            } }>GO TO CHECKOUT</CustomButtonContainer>
        </CartDropdownContainer>
    );
}

export default withRouter(connect(mapStateToProps)(CartDropdown));