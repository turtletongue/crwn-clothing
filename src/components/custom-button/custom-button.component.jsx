import { CustomButtonContainer } from './custom-button.styles.jsx';

const CustomButton = ({ children, ...otherProps}) => {
    return (
        <CustomButtonContainer {...otherProps}>
            { children }
        </CustomButtonContainer>
    );
}

export default CustomButton;