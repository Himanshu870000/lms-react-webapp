import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import tokenReducer from "./token/reducer";
import categoryReducer from "./category/reducer"


const rootReducers = combineReducers({
  user: userReducer,
  tokenReducer: tokenReducer,
  categoryReducer:categoryReducer,

});

export default rootReducers;
