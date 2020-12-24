import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">Your cart is empty.</span>
                }
            </div>
            <CustomButton onClick={ () => {
                dispatch(toggleCartHidden());
                history.push(`/checkout`);
            } }>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default withRouter(connect(mapStateToProps)(CartDropdown));