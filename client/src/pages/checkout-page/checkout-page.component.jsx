import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';
import StripeButton from '../../components/stripe-button/stripe-button.component.jsx';
import { CheckoutPageContainer, 
        CheckoutHeaderContainer, 
        HeaderBlockContainer, 
        TotalContainer, 
        TestWarningContainer } from './checkout-page.styles.jsx';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const Checkout = ({ cartItems, total }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <TotalContainer><span>TOTAL: ${ total }</span></TotalContainer>
            <TestWarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01 / 25 - CVC: 123
                <br />
            </TestWarningContainer>
            <StripeButton price={total} />
        </CheckoutPageContainer>
    );
}

export default connect(mapStateToProps)(Checkout);