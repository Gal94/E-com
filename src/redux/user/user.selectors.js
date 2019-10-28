import { createSelector } from 'reselect';

//returns a slice of the state
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], //an array of state properties
    user => user.currentUser //a value from the state properties to return
);