import { AnyAction } from "redux";
import { RESET_USER, SET_USER } from "./actions";

type UserState = { data: any | null };

const initialState: UserState = {
  data: null,
};

const reducer = (state = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case SET_USER:
      return { data: action.payload };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
