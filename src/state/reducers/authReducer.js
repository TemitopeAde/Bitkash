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
<<<<<<< HEAD
=======
  OTP_SUCCESS,
  OTP_FAILED,
  RESET_STATE,
  GET_USER_BANKS_FAILED,
  GET_USER_BANKS_SUCCESS,
>>>>>>> master
} from "../action-creators/types";

const initialState = {
  isAuthenticated: false,
<<<<<<< HEAD
  loading: true,
  // token: localStorage.getItem("token"),
  token: null,
  message: "",
  userDetails: {},
  showModal: false,
  showPay: false,
  kycStatus: "",
  kycUsd: false,
};

const authReducer = (state = initialState, action) => {
=======
  phoneAndEmailVerified: false,
  unverifiedUser: true,
  loading: true,
  message: "",
  userDetails: {},
  userBanks: [],
  showModal: false,
  showPay: false,
  logoutStatus: false,
  emailVerificationSent: false,
  token: null,
  kycMessage: "",
};

const authReducer = (state = initialState, action) => {
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

>>>>>>> master
  if (action.type === SIGNUP_SUCCESS) {
    const { payload } = action;
    localStorage.setItem("token", payload.token);
    return {
      ...state,
<<<<<<< HEAD
      isAuthenticated: true,
      loading: false,
      token: payload.token,
=======
      emailVerificationSent: true,
      loading: false,
>>>>>>> master
    };
  }

  if (action.type === SEND_ID) {
    return state;
  }

  if (action.type === SIGNUP_FAIL) {
    localStorage.removeItem("token");
    const { payload } = action;
<<<<<<< HEAD
    console.log(payload);
=======
>>>>>>> master
    return {
      ...state,
      isAuthenticated: false,
      loading: false,
      token: null,
      message: payload.response.data.message,
    };
  }

<<<<<<< HEAD
  if (action.type === LOGIN_SUCCESS) {
    const { payload } = action;
    localStorage.setItem("token", payload.token);
=======
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
>>>>>>> master
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
<<<<<<< HEAD
      token: payload.token,
=======
      userDetails: payload,
      token: payload.token_details.token,
>>>>>>> master
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
<<<<<<< HEAD
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("userData");
    localStorage.removeItem("paymentDetails");
    localStorage.removeItem("response");
=======
    localStorage.removeItem("userData");

>>>>>>> master
    return {
      ...state,
      isAuthenticated: false,
      loading: false,
<<<<<<< HEAD
      token: null,
      userDetails: {},
=======
      userDetails: {},
      token: null,
>>>>>>> master
    };
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
<<<<<<< HEAD
    console.log(payload);
    return {
      state,
      kycUsd: false,
      kycStatus: payload,
=======
    return {
      ...state,
      showModal: true,
      kycMessage: payload,
>>>>>>> master
    };
  }

  if (action.type === KYC_USD_SUCCESS) {
    const { payload } = action;
    return {
<<<<<<< HEAD
      state,
      kycUsd: true,
      kycStatus: payload,
=======
      ...state,
      showModal: true,
      kycMessage: payload,
>>>>>>> master
    };
  }

  if (action.type === KYC_EURO_SUCCESS) {
    return {
<<<<<<< HEAD
      state,
      kyc_eur_status: true,
=======
      ...state,
      showModal: true,
      kycMessage: "Hurray! you are almost there",
>>>>>>> master
    };
  }

  if (action.type === KYC_EURO_FAILED) {
    return {
<<<<<<< HEAD
      state,
      kyc_eur_status: false,
=======
      ...state,
      showModal: true,
      kycMessage: "Unauthorized",
    };
  }

  if (action.type === RESET_STATE) {
    return {
      ...state,
      showModal: false,
>>>>>>> master
    };
  }

  return state;
};

export default authReducer;
