import { GET_CLAIMS_ERROR, GET_CLAIMS_LOADING, GET_CLAIMS_SUCCESS } from "./actionTypes";

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