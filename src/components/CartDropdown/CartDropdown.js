import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    };
};

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem item={cartItem} />)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default connect(mapStateToProps)(CartDropdown);