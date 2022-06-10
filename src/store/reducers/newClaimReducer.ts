import {
    NEW_CLAIM_SUCCES,
    NEW_CLAIM_ERROR,
    NewClaimAction,
    NewClaimState
  } from "../types";
  
  const initialState:  NewClaimState = {
    success: false,
    error: false
  }
  
  export const newClaimReducer = (state = initialState, action: NewClaimAction) => {
    switch (action.type) {
      case NEW_CLAIM_SUCCES:
        return {
            success: action.payload,
            error: false
        };
      case NEW_CLAIM_ERROR:
        return {
            success: false,
            error: action.payload
        };
      default:
        return state;
    }
  };