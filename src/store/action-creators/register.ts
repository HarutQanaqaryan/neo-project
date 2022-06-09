import axios from "axios";
import { TypedDispatch, TypedThunk } from "..";
import { BASE_URL } from "../../helpers/contstants";
import { RegisterData, REGISTER_ERROR, REGISTER_SUCCESS } from "../types";

export const registerUser = (data: RegisterData): TypedThunk => {
  return async (dispatch: TypedDispatch) => {
    try {
      await axios.post(`${BASE_URL}/auth/registratio`, {
        fullName: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
      });
      dispatch({ type: REGISTER_SUCCESS, payload: true });
    } catch (e) {
      dispatch({
        type: REGISTER_ERROR,
        payload: true
      });
      console.log(e)
    }
  };
};