import { GET_ATTENDANCE } from "../types/attendances";

const initialState = {
  attendances: [],
};

function attendanceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ATTENDANCE:
      return {
        ...state,
        attendances: action.payload,
      };

    default:
      return state;
  }
}

export { attendanceReducer };
