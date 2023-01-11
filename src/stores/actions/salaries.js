import { baseUrl } from "../../configs/baseUrl";
import { GET_SALARIES } from "../types/salaries";

export const getAll = (data) => ({
  type: GET_SALARIES,
  payload: data,
});

const getSalaries =
  ({ page = 1, firstName = "" }) =>
  async (dispatch) => {
    try {
      let params = `?page=${page}`;

      if (firstName) {
        params += `&firstName=${firstName}`;
      }

      const res = await fetch(`${baseUrl}/salaries/web${params}`, {
        method: "GET",
      });

      const result = await res.json();
      if (!res.ok) throw result;
      dispatch(getAll(result));
      return result;
    } catch (err) {
      throw err;
    }
  };

export { getSalaries };
