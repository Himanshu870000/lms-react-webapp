import { AnyAction } from "redux";
import { SET_CATEGORY, RESET_CATEGORY } from "./actions";

type CategoryState = { selectedCategory: any | null };

const initialState: CategoryState = {
selectedCategory: null,
};

const reducer = (state = initialState, action: AnyAction): CategoryState => {
switch (action.type) {
case SET_CATEGORY:
return { selectedCategory: action.payload };
case RESET_CATEGORY:
return initialState;
default:
return state;
}
};

export default reducer;