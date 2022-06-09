import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { loginReducer } from "./reducers/loginReducer";

const rootReducer = combineReducers({
  login: loginReducer,
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
