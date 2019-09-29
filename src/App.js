import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    //acts as an observer for when users log in using the google AUTH
    componentDidMount(){
        // onAuthStateChanged acts as an observer for when users log in using the google AUTH
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth){ //if someone tried to log in
                //checks to see if a user is in the database, if not adds it
                const userRef = await createUserProfileDocument(userAuth);

                //if a user signs in, we now have access to it's UID, email, displayName and creation date
                userRef.onSnapshot(snapShot => {
                  this.setState({
                      currentUser: {
                      id: snapShot.id,
                      ...snapShot.data()
                      }
                  });
                });
            } else { //user has not logged in
                this.setState({currentUser: userAuth}); //which is null in this case
            }
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

  render() {
      return (
          <div className="App">
              <Header currentUser={this.state.currentUser}/>
              <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route exact path='/signin' component={SignInAndSignUpPage}/>
                  <Route exact path='/shop' component={ShopPage}/>
              </Switch>
          </div>
      );
  }
}

export default App;
