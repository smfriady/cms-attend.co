import { FETCH_ROLES_SUCCESS } from "../actions/actionTypes";

const initialState = { roles: [] };

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.payload,
      };
    default:
      return state;
  }
};

export default roleReducer