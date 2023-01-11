import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

import { attendanceReducer } from "./reducers/attendances";
import { authReducers } from "./reducers/auth";
import { employeeReducer } from "./reducers/employees";
import { salariesReducer } from "./reducers/salaries";

const rootReducers = combineReducers({
  auth: authReducers,
  employee: employeeReducer,
  attendance: attendanceReducer,
  salary: salariesReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
