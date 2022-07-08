import { LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT, REGISTER_ERROR, REGISTER_SUCCESS } from "./actionTypes";

interface SignOutAction {
    type: typeof LOG_OUT;
  }
  
  interface SetErrorAction {
    type: typeof LOGIN_ERROR;
    payload: string;
  }
  
  interface SetSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: string;
  }
  interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: boolean;
  }
  interface RegisterErrorAction {
    type: typeof REGISTER_ERROR;
    payload: boolean;
  }
  
  export interface SignInData {
    login: string;
    password: string;
  }
  
  export interface AuthState {
    error: string;
    success: boolean;
  }
  
  export interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export interface RegisterState {
    success: boolean;
    error: string;
  }
  
  export type AuthAction =
    | SignOutAction
    | SetErrorAction
    | SetSuccessAction
    | RegisterErrorAction
    | RegisterSuccessAction;