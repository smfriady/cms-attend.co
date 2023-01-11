import { GET_EMPLOYEES } from "../types/employees";

const initialState = {
  employees: [],
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };

    default:
      return state;
  }
}

export { employeeReducer };
