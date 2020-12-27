import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles.jsx';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
    :
    <WrappedComponent {...otherProps} />;

    return Spinner;
}

export default WithSpinner;