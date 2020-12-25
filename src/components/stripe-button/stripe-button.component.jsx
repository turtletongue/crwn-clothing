import { withRouter } from 'react-router-dom';
import { StripeCheckoutContainer } from './stripe-button.styles.jsx';

const StripeButton = ({ price, history }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I1stlJeVfJJ7K9IfCyNNgvQ8j3tmjJrcFZZLYpwaIIy3ST8Fbw6B9GIMJpfuzyXUY2iwU4DNnn424XcBFKUhkZ0003GYx4lrA';
    
    const onToken = () => {
        alert('Payment Successful');
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

export default withRouter(StripeButton);