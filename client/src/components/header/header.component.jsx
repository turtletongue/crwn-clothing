import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles.jsx';
import { signOutStart } from '../../redux/user/userActions';
import { Alert } from 'react-bootstrap';
import { selectAlertHidden, selectAlertTheme, selectAlertText } from '../../redux/alert/alertSelectors';
import { closeAlert } from '../../redux/alert/alertActions';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
    alertHidden: selectAlertHidden,
    alertTheme: selectAlertTheme,
    alertText: selectAlertText
})

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOutStart()),
        dismissAlert: () => dispatch(closeAlert())
    };
}

const Header = ({ currentUser, cartHidden, alertHidden, alertTheme, alertText, dismissAlert, signOut }) => {
    return (
        <div>
            <HeaderContainer>
                <LogoContainer to="/">
                    <Logo className="logo" />
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to="/shop">SHOP</OptionLink>
                    <OptionLink to="/contact">CONTACT</OptionLink>
                    {
                        (currentUser) ?
                            <OptionLink as='div' onClick={() => signOut()}>SIGN OUT</OptionLink>
                            :
                            <OptionLink className="option" to="/signin">SIGN IN</OptionLink>
                    }
                    <CartIcon />
                </OptionsContainer>
                {
                    (!cartHidden) ? <CartDropdown /> : null
                }
            </HeaderContainer>
            <Alert variant={alertTheme} show={!alertHidden} onClose={ () => dismissAlert() } dismissible>
                { alertText }
            </Alert>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);