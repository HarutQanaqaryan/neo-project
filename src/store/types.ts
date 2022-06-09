export const SIGN_OUT = 'SIGN_OUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'SET_SUCCESS';
export const SET_USER = "SET_USER";

interface SignOutAction {
  type: typeof SIGN_OUT;
}

interface SetErrorAction {
  type: typeof LOGIN_ERROR;
  payload: string;
}

interface SetSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

interface SetUser {
  type: typeof SET_USER;
  payload: any
}
export interface SignInData {
  login: string;
  password: string;
}

export interface AuthState {
  user: null;
  error: string;
  success: boolean
}

export type AuthAction =  SignOutAction | SetErrorAction | SetSuccessAction | SetUser;