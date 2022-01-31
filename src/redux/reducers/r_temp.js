import { Temptypes } from "../action_types";

const initState = {
  name: "Mukesh",
};

const Temp_reducer = (state = initState, action) => {
  switch (action.types) {
    case Temptypes.TEMP:
      return { ...state, name: "marco" };
    default:
      return state;
  }
};

export default Temp_reducer;
