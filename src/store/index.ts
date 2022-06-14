import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { claimsReducer } from "./reducers/claimsReducer";
import { loginReducer } from "./reducers/loginReducer";
import { newClaimReducer } from "./reducers/newClaimReducer";
import { registerReducer } from "./reducers/registerReducer";
import { filterValuereducer } from "./reducers/filterValues";
import { setClaimValuesReducer } from "./reducers/setClaimValues";
import { setUserReducer } from "./reducers/setUserReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  claims: claimsReducer,
  newClaim: newClaimReducer,
  setClaimValues: setClaimValuesReducer,
  user: setUserReducer,
  filterValues: filterValuereducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
AnyAction
>
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
