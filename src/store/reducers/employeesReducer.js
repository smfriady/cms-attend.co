import {
  CREATE_EMPLOYEES_SUCCESS,
  DETAIL_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEES_SUCCESS,
} from "../actions/actionTypes";

const initialState = { employees: [], employee: {}, pages: 0 };
const employeesReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
        pages: action.pages,
      };
    case CREATE_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case DETAIL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employee: action.payload,
      };
    case UPDATE_EMPLOYEES_SUCCESS:

    default:
      return state;
  }
};
export default employeesReducer;
