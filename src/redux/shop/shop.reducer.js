import ShopActionType from "./shop.types";

const INITIAL_STATE = {
    collections: null
};

const shopReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type){
      case ShopActionType.UPDATE_COLLECTIONS:
          return{
              ...currentState,
              collections: action.payload
          };
      default:
          return currentState
  }
};

export default shopReducer;