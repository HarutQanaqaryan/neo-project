import axios from "axios";
import { TypedDispatch, TypedThunk } from "..";
import { BASE_URL } from "../../helpers/contstants";
import { SignInData } from "../types";
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../types";

export const loginUser = (data: SignInData): TypedThunk => {
  return async (dispatch: TypedDispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: data.login,
        password: data.password,
      });
      dispatch({ type: LOGIN_SUCCESS, payload: true });
      localStorage.setItem("Token", JSON.stringify(response.data.token));
      localStorage.setItem(
        "User",
        JSON.stringify({
          email: response.data.email,
          fullName: response.data.fullName,
          id: response.data.user_id,
          role: response.data.role.slug,
        })
      );
    } catch ({ response: { status } }) {
      const notRegistered =
        status === 401 &&
        "User not registered or incorrectly entered email/password";
      const serverError = status === 0 && "Server side error";
      dispatch({
        type: LOGIN_ERROR,
        payload: notRegistered || serverError,
      });
    }
  };
};
