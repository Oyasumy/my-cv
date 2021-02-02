import * as Types from "../constants/configAction";
import { dataE, dataV } from "../constants/dataLanguge";
const initialState = {
  language: dataE,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_CHANGE_LANGUAGE:
      var newLang = {};
      console.log("ac",action.payload);
      if (action.payload === "el") {
        newLang = dataE;
      } else {
        newLang = dataV;
      }
      return { ...state, language: newLang };

    default:
      return state;
  }
};
export default myReducer;
