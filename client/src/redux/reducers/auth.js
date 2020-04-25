import { actionTypes } from "../actions/authActions";

export const initialState = {
  token: "",
  firstname: "",
  lastname: "",
  day: "",
  month: "",
  gender: "",
  area: "",
};

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case actionTypes.ADD_USERNAME:
      return {
        ...state,
        ...action,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        token: "",
      };

    default:
      return state;
  }
};

export default reducerAuth;
