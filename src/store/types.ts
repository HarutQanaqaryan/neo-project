export const SIGN_OUT = 'SIGN_OUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'SET_SUCCESS';
export const SET_USER = "SET_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const GET_CLAIMS_SUCCESS = "GET_CLAIMS_SUCCESS";
export const GET_CLAIMS_ERROR = "GET_CLAIMS_ERROR";
export const GET_CLAIMS_LOADING = "GET_CLAIMS_LOADING"

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
interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS
  payload: boolean
}
interface RegisterErrorAction {
  type: typeof REGISTER_ERROR
  payload: boolean
}

export interface SignInData {
  login: string;
  password: string;
}

export interface AuthState {
  error: string;
  success: boolean
}
export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

export interface RegisterState {
  success: boolean;
  error: boolean;
}

export interface GetClaimsData {
  loading: boolean;
  data: Array<any>
  error: boolean;
}

interface GetClaimsLoadingAction {
  type: typeof GET_CLAIMS_LOADING;
  payload: boolean;
}

interface GetClaimsSuccessAction {
   type: typeof GET_CLAIMS_SUCCESS;
   payload: Array<any>
}

interface GetClaimsErrorAction {
  type: typeof GET_CLAIMS_ERROR;
  payload: boolean;
}

export type AuthAction =  SignOutAction | SetErrorAction | SetSuccessAction | RegisterErrorAction | RegisterSuccessAction;
export type GetClaimsAction = GetClaimsSuccessAction | GetClaimsErrorAction | GetClaimsLoadingAction;