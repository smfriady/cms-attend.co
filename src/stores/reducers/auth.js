import { USER_LOGIN } from "../types/auth";

let token = localStorage.getItem("access_token") || null;
const initialState = {
  user: token,
};

function authReducers(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export { authReducers };
