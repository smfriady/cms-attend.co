import axios from "axios";
import { FETCH_ROLES_SUCCESS, BASE_URL } from "./actionTypes";

export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/roles`,
      });
      dispatch({
        type: FETCH_ROLES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
