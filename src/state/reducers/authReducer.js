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
  SHOW_PAY_PAGE,
  KYC_USD_FAILED,
  KYC_USD_SUCCESS,
  KYC_EURO_SUCCESS,
  KYC_EURO_FAILED,
  OTP_SUCCESS,
  OTP_FAILED,
  RESET_STATE,
  GET_USER_BANKS_FAILED,
  GET_USER_BANKS_SUCCESS,
  TRANSACTION_HISTORY_SUCCESS,
  TRANSACTION_HISTORY_FAILED,
  LOGOUT_FAILED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_FAILED
} from "../action-creators/types";

const initialState = {
  isAuthenticated: false,
  phoneAndEmailVerified: false,
  unverifiedUser: true,
  loading: true,
  message: "",
  userDetails: {},
  userBanks: [],
  transactionsHistory: [],
  showModal: false,
  showPay: false,
  logoutStatus: false,
  emailVerificationSent: false,
  token: null,
  kycMessage: "",
  userNotifications: [],
  
};

const authReducer = (state = initialState, action) => {
  const {payload} = action;
  if (action.type === NOTIFICATION_SUCCESS) {
    return {
      ...state,
      userNotifications: payload
    }
  }

  if (action.type === NOTIFICATION_SUCCESS) {
    return {
      ...state,
      userNotifications: []
    };
  }

  if (action.type === TRANSACTION_HISTORY_FAILED) {
    return {
      ...state,
      transactionsHistory: []
    };
  }


  if (action.type === TRANSACTION_HISTORY_SUCCESS) {
    const { payload } = action;

    return {
      ...state,
      transactionsHistory: payload,
    };
  }

  if (action.type === GET_USER_BANKS_SUCCESS) {
    return {
      ...state,
      userBanks: action.payload,
    };
  }

   if (action.type === GET_USER_BANKS_FAILED) {
     return {
       ...state,
       userBanks: []
     };
   }

  if (action.type === SIGNUP_SUCCESS) {
    const { payload } = action;
    localStorage.setItem("token", payload.token);
    return {
      ...state,
      emailVerificationSent: true,
      loading: false,
    };
  }

  if (action.type === SEND_ID) {
    return state;
  }

  if (action.type === SIGNUP_FAIL) {
    localStorage.removeItem("token");
    const { payload } = action;
    return {
      ...state,
      isAuthenticated: false,
      loading: false,
      token: null,
      message: payload.response.data.message,
    };
  }

  if (action.type === OTP_SUCCESS) {
    console.log(action.type);
    return {
      ...state,
      phoneAndEmailVerified: true,
    };
  }

  if (action.type === OTP_FAILED) {
    console.log(action.type);
    return {
      ...state,
      phoneAndEmailVerified: false,
    };
  }

  if (action.type === LOGIN_SUCCESS) {
    const { payload } = action;
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      userDetails: payload,
      token: payload.token_details.token,
    };
  }

  if (action.type === LOGIN_FAIL) {
    const { payload } = action;
    console.log(payload);
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
    return {
      ...state,
      isAuthenticated: false,
      loading: false,
      userDetails: {},
      token: null,
      transactionsHistory: [],
      userBanks: [],
    };
  }

   if (action.type === LOGOUT_FAILED) {
     
   }

  

  if (action.type === RECOVER_PASSWORD_FAILED) {
    const { payload } = action;
    return {
      ...state,
      message: payload,
    };
  }

  if (action.type === SUBMIT_NEW_PASSWORD_FAILED) {
    const { payload } = action;

    return {
      ...state,
      message: payload,
    };
  }

  if (action.type === SUBMIT_NEW_PASSWORD_SUCCESS) {
    return state;
  }

  if (action.type === PHONE_NUMBER_CHANGED_FAILED) {
    const { payload } = action;
    return {
      ...state,
      message: payload,
    };
  }

  if (action.type === FETCH_USER_SUCCESS) {
    const { payload } = action;
    console.log(payload);

    return {
      ...state,
      userDetails: payload.data,
    };
  }

  if (action.type === SHOW_MODAL) {
    return {
      ...state,
      showModal: true,
    };
  }

  if (action.type === SHOW_PAY_PAGE) {
    return {
      ...state,
      showPay: true,
    };
  }

  if (action.type === KYC_USD_FAILED) {
    const { payload } = action;
    return {
      ...state,
      showModal: true,
      kycMessage: payload,
    };
  }

  if (action.type === KYC_USD_SUCCESS) {
    const { payload } = action;
    return {
      ...state,
      showModal: true,
      kycMessage: payload,
    };
  }

  if (action.type === KYC_EURO_SUCCESS) {
    return {
      ...state,
      showModal: true,
      kycMessage: "Hurray! you are almost there",
    };
  }

  if (action.type === KYC_EURO_FAILED) {
    return {
      ...state,
      showModal: true,
      kycMessage: "Unauthorized",
    };
  }

  if (action.type === RESET_STATE) {
    return {
      ...state,
      showModal: false,
    };
  }

  return state;
};

export default authReducer;
