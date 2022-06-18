import { USER } from "../../helpers/contstants";
import { REMOVE_USER, SET_USER } from "../types/actionTypes";
import { UserInfoActions, UserInfoState } from "../types/userInfo";
const userInf = typeof USER === "string" && JSON.parse(USER)

const initialState: UserInfoState = {
  email: userInf.email || "",
  fullName: userInf.fullName || "",
  id: userInf.id || "",
  role: userInf.role || "",
  isAdmin: userInf.isAdmin || false
};

export const setUserReducer = (
  state = initialState,
  action: UserInfoActions
) => {
  switch (action.type) {
    case SET_USER:
      return {
        email: action.email,
        fullName: action.fullName,
        id: action.id,
        role: action.role,
        isAdmin: action.isAdmin
      }
      case REMOVE_USER: 
      return {}
      default:
          return state
  }
};
