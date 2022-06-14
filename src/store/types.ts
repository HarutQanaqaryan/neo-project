export const SIGN_OUT = "SIGN_OUT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "SET_SUCCESS";
export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const GET_CLAIMS_SUCCESS = "GET_CLAIMS_SUCCESS";
export const GET_CLAIMS_ERROR = "GET_CLAIMS_ERROR";
export const GET_CLAIMS_LOADING = "GET_CLAIMS_LOADING";

export const NEW_CLAIM_SUCCES = "NEW_CLAIM_SUCCES";
export const NEW_CLAIM_ERROR = "NEW_CLAIM_ERROR";

export const SET_DATA = "SET_DATA";
export const UPDATE_TYPE = "UPDATE_TYPE";
export const UPDATE_STATUS = "UPDATE_STATUS";

// -------- Login - Registration Types

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
  error: boolean;
}

export type AuthAction =
  | SignOutAction
  | SetErrorAction
  | SetSuccessAction
  | RegisterErrorAction
  | RegisterSuccessAction;

// -------- Get Claims Types

export interface GetClaimsData {
  loading: boolean;
  data: Array<any>;
  error: boolean;
}

interface GetClaimsLoadingAction {
  type: typeof GET_CLAIMS_LOADING;
  payload: boolean;
}

interface GetClaimsSuccessAction {
  type: typeof GET_CLAIMS_SUCCESS;
  payload: Array<any>;
}

interface GetClaimsErrorAction {
  type: typeof GET_CLAIMS_ERROR;
  payload: boolean;
}

export type GetClaimsAction =
  | GetClaimsSuccessAction
  | GetClaimsErrorAction
  | GetClaimsLoadingAction

// -------- New Claim Types

export interface NewClaimState {
  success: boolean;
  error: boolean;
}
interface NewClaimSuccesAction {
  type: typeof NEW_CLAIM_SUCCES;
  payload: boolean;
}

interface NewClaimErrorAction {
  type: typeof NEW_CLAIM_ERROR;
  payload: boolean;
}

export interface NewClaimData {
  title: string;
  description: string;
  type: string;
  status: string;
  id?: string;
}

export type NewClaimAction = NewClaimSuccesAction | NewClaimErrorAction;

export interface SetClaimsValuesState {
  title: string;
  description: string;
  type: string;
  id: string;
  status: string;
}

interface SetDataAction {
  type: typeof SET_DATA;
  title: string;
  description: string;
  claimType: string;
  id: string;
  status: string;
}

interface UpdateStatusAction {
  type: typeof UPDATE_STATUS;
  status: string;
}
export type ClaimsValueActions =
  | SetDataAction
  | UpdateStatusAction

export interface UserInfoState {
  email: string;
  fullName: string;
  id: string;
  role: string;
  isAdmin: boolean
}

interface SetUserInfoAction {
  type: typeof SET_USER;
  email: string;
  fullName: string;
  id: string;
  role: string;
  isAdmin: boolean
}

interface RemoverUserInfoAction {
  type: typeof REMOVE_USER;
  payload: any;
}

export type UserInfoActions = SetUserInfoAction | RemoverUserInfoAction