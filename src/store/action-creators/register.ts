import axios from "axios";
import { TypedDispatch, TypedThunk } from "..";
import { BASE_URL } from "../../helpers/contstants";
import { REGISTER_ERROR, REGISTER_SUCCESS } from "../types/actionTypes";
import { RegisterData } from "../types/loginRegister";

export const registerUser = (data: RegisterData): TypedThunk => {
  return async (dispatch: TypedDispatch) => {
    try {
      await axios.post(`${BASE_URL}/auth/registration`, {
        fullName: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
      });
      dispatch({ type: REGISTER_SUCCESS, payload: true });
    } catch (e: any) {
      dispatch({
        type: REGISTER_ERROR,
        payload: e.response.data.message
      });
    }
  };
};
