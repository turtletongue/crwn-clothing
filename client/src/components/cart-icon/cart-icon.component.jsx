import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles.jsx';

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: (() => dispatch(toggleCartHidden()))
    };
}

const CartIcon = ({ itemCount, toggleCartHidden }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconContainer />
            <ItemCountContainer>{ itemCount }</ItemCountContainer>
        </CartIconContainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);