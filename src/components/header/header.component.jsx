import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles.jsx';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    (currentUser) ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                        :
                        <OptionLink className="option" to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                (!hidden) ? <CartDropdown /> : null
            }
        </HeaderContainer>
    );
}

export default connect(mapStateToProps)(Header);