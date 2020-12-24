import './CheckoutItem.scss';
import { addToCart, clearFromCart, removeFromCart } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        clearCartItem: item => dispatch(clearFromCart(item)),
        addItemToCart: item => dispatch(addToCart(item)),
        removeItemFromCart: item => dispatch(removeFromCart(item))
    };
}

const CheckoutItem = ({ cartItem, cartItem: { name, imageUrl, quantity, price }, clearCartItem, addItemToCart, removeItemFromCart }) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="item" />
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
                <span className="value">{ quantity }</span>
                <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${ price }</span>
            <div className="remove-button" onClick={() => clearCartItem(cartItem)} >&#10005;</div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(CheckoutItem);