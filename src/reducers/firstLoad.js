import * as Types from "../constants/configAction";

const initialState = {
  firstLoad: true,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_FIRST_LOAD:
      return { ...state, firstLoad: false };

    default:
      return state;
  }
};
export default myReducer;
