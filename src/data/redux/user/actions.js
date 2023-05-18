import { AnyAction } from "redux";
import createActionName from "../../helper/createActionName";

export const SET_USER = createActionName("USER", "SET_USER");
export const RESET_USER = createActionName("USER", "RESET_USER");

export const setUser = (user: any): AnyAction => ({
  type: SET_USER,
  payload: user,
});

export const resetUser = (): AnyAction => ({
  type: RESET_USER,
});
