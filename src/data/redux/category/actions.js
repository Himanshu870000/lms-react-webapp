import { AnyAction } from "redux";
import createActionName from "../../helper/createActionName";

export const SET_CATEGORY = createActionName("CATEGORY", "SET_CATEGORY");
export const RESET_CATEGORY = createActionName("CATEGORY", "RESET_CATEGORY");

export const setCategory = (selectedCategory: any): AnyAction => ({
type: SET_CATEGORY,
payload: selectedCategory,
});

export const resetCategory = (): AnyAction => ({
type: RESET_CATEGORY,
});