import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import departmentReducer from "./departmentReducer";
import roleReducer from "./roleReducer";

const rootReducer = combineReducers({
  employeesReducer,
  departmentReducer,
  roleReducer,
});

export default rootReducer;
