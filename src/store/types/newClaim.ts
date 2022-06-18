import { NEW_CLAIM_ERROR, NEW_CLAIM_SUCCESS, SET_DATA, UPDATE_STATUS } from "./actionTypes";

export interface NewClaimState {
    success: boolean;
    error: boolean;
  }
  interface NewClaimSuccesAction {
    type: typeof NEW_CLAIM_SUCCESS;
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