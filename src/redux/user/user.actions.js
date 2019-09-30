import {UserActionTypes} from "./user.types";
//functions that return objects of type and payload
//setCurrentUser gets user which is either the snapshot or the userAUTH
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
    });