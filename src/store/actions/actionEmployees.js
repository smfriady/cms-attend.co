import {
  FETCH_EMPLOYEES_SUCCESS,
  CREATE_EMPLOYEES_SUCCESS,
  BASE_URL,
  DETAIL_EMPLOYEES_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/employees/?page=`,
      });
      dispatch({
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: data.employees,
        pages: Math.ceil(data.total / 5),
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const createEmployees = (payload) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();

      Object.keys(payload).forEach((key) => {
        formData.append(key, payload[key]);
      });

      const { data } = await axios({
        method: "POST",
        url: `${BASE_URL}/employees`,
        data: formData,
        headers: {
          "Content-Type": "multipart/from-data",
        },
      });
      dispatch({
        type: CREATE_EMPLOYEES_SUCCESS,
        payload,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };
};

export const deleteEmployees = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `${BASE_URL}/employees/${id}`,
      });
      dispatch(fetchEmployees());
      return data;
    } catch (err) {
      throw err;
    }
  };
};

export const detailEmployee = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/employees/${id}`,
      });
      dispatch({
        type: DETAIL_EMPLOYEES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateEmployee = (payload, id) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();

      Object.keys(payload).forEach((key) => {
        formData.append(key, payload[key]);
      });

      const { data } = await axios({
        method: "PUT",
        url: `${BASE_URL}/employees/${id}`,
        data: formData,
      });
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };
};
