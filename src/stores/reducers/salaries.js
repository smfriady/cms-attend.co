import { GET_SALARIES } from "../types/salaries";

const initialState = {
  salaries: [],
};

function salariesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SALARIES:
      return {
        ...state,
        salaries: action.payload,
      };

    default:
      return state;
  }
}

export { salariesReducer };
