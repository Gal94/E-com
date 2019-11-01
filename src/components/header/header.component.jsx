import React from 'react';
import { ReactComponent as Logo}  from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils";
import { connect } from 'react-redux'; //allows us to make our component have attributes related to redux
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from 'reselect';
import { selectCartHidden} from "../../redux/cart/cart.selectors";
import { selectCurrentUser} from "../../redux/user/user.selectors";
import {HeaderContainer, LogoContainer, Options, OptionLink, OptionDiv} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className='logo'/>
        </LogoContainer>
        <Options>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </Options>
        {
            hidden ?
                null
                :
                <Cart/>
        }
    </HeaderContainer>
);
//createStructuredSelectors automatically passes the state to the selectors
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
//connect connects into the store, giving me the state(rootReducer) object
export default connect(mapStateToProps)(Header);