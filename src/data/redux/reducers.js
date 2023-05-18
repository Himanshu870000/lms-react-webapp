import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import tokenReducer from "./token/reducer";


const rootReducers = combineReducers({
  user: userReducer,
  tokenReducer: tokenReducer,

});

export default rootReducers;
