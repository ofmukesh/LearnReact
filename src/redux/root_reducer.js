import { combineReducers } from "redux";
import Temp_reducer from "./reducers/r_temp";

export default combineReducers({
  temp_data: Temp_reducer,
});
