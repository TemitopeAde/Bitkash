import {
  SIGNUP_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_ALERT,
  SET_ALERT,
  SIGNUP_SUCCESS,
  SHOW_LOADER,
  HIDE_LOADER,
  SEND_ID
} from "../action-creators/types";

const initialState = {
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"),
  message: "",
};

const authReducer = (state = initialState, action) => {
  if (action.type === SIGNUP_SUCCESS) {
    const { payload } = action;
    localStorage.setItem("token", payload.token);
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      token: payload.token,
    };
  }

  if (action.type === SEND_ID) {
    return state
  }

  if (action.type === SIGNUP_FAIL) {
    localStorage.removeItem("token");
    const { payload } = action;
    console.log(payload)
    return {
      ...state,
      isAuthenticated: false,
      loading: false,
      token: null,
      message: payload.response.data.message,
    };
  }

  if (action.type === LOGIN_SUCCESS) {
    const { payload } = action;
    localStorage.setItem("token", payload.token);
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      token: payload.token,
    };
  }

  if (action.type === LOGIN_FAIL) {
    const { payload } = action;
    console.log(payload)
    localStorage.removeItem("token");
    return {
      ...state,
      isAuthenticated: false,
      loading: false,
      token: null,
      message: payload.response.data.message,
    };
  }

  if (action.type === LOGOUT) {
    localStorage.removeItem("token");
    return {
      ...state,
      isAuthenticated: false,
      loading: false,
      token: null,
    };
  }

  return state;
};

export default authReducer;
