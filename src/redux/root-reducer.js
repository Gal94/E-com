import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";


//Combines all of the states from the different reducers into 1 giant state
//imported as rootReducer
export default combineReducers({
    user: userReducer
});