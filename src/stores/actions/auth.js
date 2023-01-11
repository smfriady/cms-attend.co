import { baseUrl } from "../../configs/baseUrl";
import { USER_LOGIN } from "../types/auth";

export const userLogin = (data) => ({
  type: USER_LOGIN,
  payload: data,
});

const loginUser = (credential) => async (dispatch) => {
  try {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });

    const result = await res.json();
    if (!res.ok) throw result;
    dispatch(userLogin(result.access_token));
    return result;
  } catch (err) {
    throw err;
  }
};

export { loginUser };
