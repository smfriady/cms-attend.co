import { baseUrl } from "../../configs/baseUrl";
import { GET_EMPLOYEES, ADD_EMPLOYEES, EDIT_EMPLOYEES } from "../types/employees";

export const getAll = (data) => ({
  type: GET_EMPLOYEES,
  payload: data,
});

export const addEmployees = () => ({
  type: ADD_EMPLOYEES,
});

export const updateEmployees = () => ({
  type: EDIT_EMPLOYEES,
});

const getEmployees =
  ({ page = 1, limit = 10, filter = "all", firstName = "" }) =>
  async (dispatch) => {
    let params = `?page=${page}&limit=${limit}`;

    if (filter !== "all") {
      params += `&filter=${filter}`;
    }

    if (firstName) {
      params += `&firstName=${firstName}`;
    }

    try {
      const res = await fetch(`${baseUrl}/employees/${params}`, {
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

const createEmployee = (payload) => async (dispatch) => {
  try {
    let form = new FormData();
    form.append("firstName", payload.firstName);
    form.append("lastName", payload.lastName);
    form.append("nik", payload.nik);
    form.append("education", payload.education);
    form.append("departmentId", payload.departmentId);
    form.append("roleId", payload.roleId);
    form.append("birthDate", payload.birthDate);
    form.append("email", payload.email);
    form.append("password", payload.password);
    form.append("baseSalary", payload.baseSalary);
    form.append("imgProfile", payload.imgProfile[0]);

    const res = await fetch(`${baseUrl}/employees`, {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    if (!res.ok) throw result;
    dispatch(addEmployees());
    dispatch(getEmployees({ page: 1 }));
    return result;
  } catch (err) {
    throw err;
  }
};

const editEmployee = (payload) => async (dispatch) => {
  try {
    let form = new FormData();

    form.append("firstName", payload.firstName);
    form.append("lastName", payload.lastName);
    form.append("nik", payload.nik);
    form.append("education", payload.education);
    form.append("birthDate", payload.birthDate);
    form.append("email", payload.email);
    form.append("password", payload.password);
    form.append("baseSalary", payload.baseSalary);
    form.append("departmentId", payload.departmentId);
    form.append("roleId", payload.roleId);
    if (typeof payload.imgProfile === "object") {
      form.append("imgProfile", payload.imgProfile[0]);
    } else if (typeof payload.imgProfile === "string") {
      form.append("imgProfile", payload.imgProfile);
    }

    const res = await fetch(`${baseUrl}/employees/${payload.id}`, {
      method: "PUT",
      body: form,
    });

    const result = await res.json();
    if (!res.ok) throw result;
    dispatch(updateEmployees());
    dispatch(getEmployees({ page: 1 }));
    return result;
  } catch (err) {
    throw err;
  }
};

export { getEmployees, createEmployee, editEmployee };
