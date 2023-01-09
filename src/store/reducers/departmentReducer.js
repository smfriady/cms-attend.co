import { FETCH_DEPARTMENTS_SUCCESS } from "../actions/actionTypes";

const initialState = { departments: [] };

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        departments: action.payload,
      };
    default:
        return state
  }
};
export default departmentReducer