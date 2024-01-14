import { FETCHUSER } from "../Actions/userAction";


export const userReducer = (state = { user: [] }, action) => {
    switch (action.type) {
      case FETCHUSER:
        console.log("put user in saga ?:-", action);
  
        return { ...state, user: action.user };
      default:
        return state;
    }
  };