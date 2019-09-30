import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo}  from '../../assets/crown.svg'
import './header.component.scss';
import {auth} from "../../firebase/firebase.utils";
import { connect } from 'react-redux'; //allows us to make our component have attributes related to redux


const Header = ({currentUser}) => (
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
        </div>
    </div>
);
//state is the rootReducer taken from the store
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser //we want the currentUser value from the user reducer
});
//connect connects into the store, giving me the state(rootReducer) object
export default connect(mapStateToProps)(Header);