import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo}  from '../../assets/crown.svg'
import './header.component.scss';
import {auth} from "../../firebase/firebase.utils";
import { connect } from 'react-redux'; //allows us to make our component have attributes related to redux
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
            {
                currentUser?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to='/signin' className='option'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ?
                null
                :
                <Cart/>
        }
    </div>
);
//state is the rootReducer taken from the store
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser, //we want the currentUser value from the user reducer
    hidden //returns the state of hidden
});
//connect connects into the store, giving me the state(rootReducer) object
export default connect(mapStateToProps)(Header);