import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import './CartIcon.scss';

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: (() => dispatch(toggleCartHidden()))
    };
}

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div onClick={toggleCartHidden} className="cart-icon">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(CartIcon);