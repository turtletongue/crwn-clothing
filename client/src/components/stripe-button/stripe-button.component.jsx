import { withRouter } from 'react-router-dom';
import { StripeCheckoutContainer } from './stripe-button.styles.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cartActions';

const mapDispatchToProps = dispatch => {
    return {
        clearCartAfterPayment: () => dispatch(clearCart())
    };
}

const StripeButton = ({ price, history, clearCartAfterPayment }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I1stlJeVfJJ7K9IfCyNNgvQ8j3tmjJrcFZZLYpwaIIy3ST8Fbw6B9GIMJpfuzyXUY2iwU4DNnn424XcBFKUhkZ0003GYx4lrA';
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment successful');
                clearCartAfterPayment();
            })
            .catch(error => {
                console.log(`Payment error: ${JSON.parse(error)}`);
                alert('There was an issue with your payment. Please sure you use the provided credit card.');
            });
        history.push('/');
    }

    return (
        <StripeCheckoutContainer
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default connect(null, mapDispatchToProps)(withRouter(StripeButton));