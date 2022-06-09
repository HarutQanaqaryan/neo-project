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
      dispatch({ type: LOGIN_SUCCESS, payload: true });
      dispatch({ type: SET_USER, payload: response.data });
      localStorage.setItem("User Data", JSON.stringify(response.data));
    } catch (e) {
      dispatch({
        type: LOGIN_ERROR,
        payload: "User not registered or incorrectly entered email/password",
      });
    }
  };
};
