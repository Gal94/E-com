import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom"; //gives the components wrapped around it routing capabilities
import {Provider } from 'react-redux'; //parent of everything inside the application, thus allows us to get access to all of the things stored on it anywhere
import store from "./redux/store";


ReactDOM.render(
    <Provider store={store}>
     <BrowserRouter>
        <App />
     </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
