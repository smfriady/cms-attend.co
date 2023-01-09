import axios from "axios";
import { FETCH_DEPARTMENTS_SUCCESS, BASE_URL } from "./actionTypes";

export const fetchDepartments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/departments`,
      });
      dispatch({
        type: FETCH_DEPARTMENTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
