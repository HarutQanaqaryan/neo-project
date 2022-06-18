import { REMOVE_USER, SET_USER } from "./actionTypes";

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