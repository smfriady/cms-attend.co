import { baseUrl } from "../../configs/baseUrl";
import { GET_ATTENDANCE } from "../types/attendances";

export const getAll = (data) => ({
  type: GET_ATTENDANCE,
  payload: data,
});

const getAttendances =
  ({ page = 1, limit = 10, filter = "all" }) =>
  async (dispatch) => {
    try {
      let params = `?page=${page}&limit=${limit}`;

      if (filter !== "all") {
        params += `&filter=${filter}`;
      }
      const res = await fetch(`${baseUrl}/attendances/web${params}`, {
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

export { getAttendances };
