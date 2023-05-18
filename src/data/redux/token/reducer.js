import { AnyAction } from "redux";
import { SET_TOKEN, RESET_TOKEN } from "./actions";

type TokenState = { token: any | null };

const initialState: TokenState = {
  token: null,
};

const reducer = (state = initialState, action: AnyAction): TokenState => {
  switch (action.type) {
    case SET_TOKEN:
      return { token: action.payload };
    case RESET_TOKEN:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
