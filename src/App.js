import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions";


class App extends React.Component {
    unsubscribeFromAuth = null;

    //acts as an observer for when users log in using the google AUTH
    componentDidMount(){
        const {setCurrentUser} = this.props;

        // onAuthStateChanged acts as an observer for when auth state changes
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth){ //if someone tried to log in
                //checks to see if a user is in the database, if not adds it
                const userRef = await createUserProfileDocument(userAuth);

                //if a user signs in, we now have access to it's UID, email, displayName and creation date
                userRef.onSnapshot(snapShot => {
                  setCurrentUser({
                      id: snapShot.id,
                      ...snapShot.data()
                  });
                });
            } else { //user has not logged in
                setCurrentUser(userAuth); //which is null in this case
            }
        });
    }

    componentWillUnmount(){
        //will prevent memory leaks
        this.unsubscribeFromAuth();
    }

  render() {
      return (
          <div className="App">
              <Header/>
              <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route exact path='/signin' component={SignInAndSignUpPage}/>
                  <Route exact path='/shop' component={ShopPage}/>
              </Switch>
          </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser :user => dispatch(setCurrentUser(user)) //dispatch an action to every reducer while invoking setCurrentUser with the user that will be used as the payload
});

//pass null because we don't need state to props here
export default connect(null, mapDispatchToProps)(App);
