import axios from "axios";
import { TypedDispatch, TypedThunk } from "..";
import { BASE_URL } from "../../helpers/contstants";
import { SET_USER, SignInData } from "../types";
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../types";

export const loginUser = (data: SignInData): TypedThunk => {
  return async (dispatch: TypedDispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: data.login,
        password: data.password,
      });
      const user: any = {
        email: response.data.email,
        fullName: response.data.fullName,
        id: response.data.user_id,
        role: response.data.role.slug,
        isAdmin: response.data.role.slug === "admin",
      }
      dispatch({ type: LOGIN_SUCCESS, payload: true });
      dispatch({
        type: SET_USER,
        email: response.data.email,
        fullName: response.data.fullName,
        id: response.data.user_id,
        role: response.data.role.slug,
        isAdmin: response.data.role.slug === "admin",
      });
      localStorage.setItem(
        "User",
        JSON.stringify(user)
      );

      localStorage.setItem("Token", JSON.stringify(response.data.token));
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
