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
  SEND_ID,
  RECOVER_PASSWORD,
  RECOVER_PASSWORD_FAILED,
  SUBMIT_NEW_PASSWORD_FAILED,
  SUBMIT_NEW_PASSWORD_SUCCESS,
  PHONE_NUMBER_CHANGED_FAILED,
  FETCH_USER_SUCCESS,
  SHOW_MODAL,
  SHOW_PAY_PAGE
} from "../action-creators/types";

const initialState = {
  isAuthenticated: false,
  loading: true,
  // token: localStorage.getItem("token"),
  token : null,
  message: "",
  userDetails: {},
  showModal: false,
  showPay: false,
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
    localStorage.removeItem("uid");
    localStorage.removeItem("userData");
    localStorage.removeItem("paymentDetails");
    localStorage.removeItem("response")
    return {
      ...state,
      isAuthenticated: false,
      loading: false,
      token: null,
      userDetails: {}
    };
  }

  if (action.type === RECOVER_PASSWORD_FAILED) {
    const { payload } = action;
    return {
      ...state,
      message: payload
    } 
  }

  if (action.type === SUBMIT_NEW_PASSWORD_FAILED) {
    const {payload} = action;

    return {
      ...state,
      message: payload
    }
  }

  if (action.type === SUBMIT_NEW_PASSWORD_SUCCESS) {
    return state
  }

  if (action.type === PHONE_NUMBER_CHANGED_FAILED) {
    const {payload} = action;
    return {
      ...state,
      message: payload
    }
  }

  if (action.type === FETCH_USER_SUCCESS) {
    const {payload} = action;
    console.log(payload)

    return {
      ...state,
      userDetails: payload.data
    }
  }

  if (action.type === SHOW_MODAL) {
  
    return {
      ...state,
      showModal: true
    }
  }

  if (action.type === SHOW_PAY_PAGE) {
    return {
      ...state,
      showPay: true,
    };
  }

  return state;
};

export default authReducer;
