import { AnyAction } from "redux";
import createActionName from "../../helper/createActionName";

export const SET_TOKEN = createActionName("TOKEN", "SET_TOKEN");
export const RESET_TOKEN = createActionName("TOKEN", "RESET_TOKEN");

export const setToken = (token: any): AnyAction => ({
  type: SET_TOKEN,
  payload: token,
});

export const resetToken = (): AnyAction => ({
  type: RESET_TOKEN,
});
