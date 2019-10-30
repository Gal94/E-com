import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; //tells redux that the local storage is the default storage.

const persistConfig = {
    key: 'root', //from which level of the reducer I want to start storing
    storage,
    whitelist: ['cart'] //contains the name of the reducers I want to store
};

//Combines all of the states from the different reducers into 1 giant state
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

//imported as rootReducer with a persist configuration
export default persistReducer(persistConfig, rootReducer);