import {UserActionTypes} from "./user.types";
const INITIAL_STATE = {
    currentUser: null
};
//gets the current state and an action storing a type and payload
//the redux-store passes the "currentState" variable when an action fires
const userReducer = (currentState = INITIAL_STATE, action) => {
    //every reducer gets every single action even if it's not related to that reducer
    switch (action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return { //edit only the data relevant for that action
                ...currentState,
                currentUser: action.payload
            };
        default:
            return currentState;
    }
};

export default userReducer;