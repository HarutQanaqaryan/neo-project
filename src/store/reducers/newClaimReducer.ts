import {
    NEW_CLAIM_SUCCESS,
    NEW_CLAIM_ERROR,
  } from "../types/actionTypes";
import { NewClaimAction, NewClaimState } from "../types/newClaim";
  
  const initialState:  NewClaimState = {
    success: false,
    error: false
  }
  
  export const newClaimReducer = (state = initialState, action: NewClaimAction) => {
    switch (action.type) {
      case NEW_CLAIM_SUCCESS:
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