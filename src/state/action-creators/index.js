import axios from "axios";
import { setAlert } from "./alert";
import {
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_ALERT,
  SET_ALERT,
  SIGNUP_FAIL,
  HIDE_LOADER,
  SHOW_LOADER,
  RECOVER_PASSWORD,
  RECOVER_PASSWORD_FAILED,
  SUBMIT_NEW_PASSWORD_SUCCESS,
  SUBMIT_NEW_PASSWORD_FAILED,
} from "../action-creators/types";

export const showLoader = () => async (dispatch) => {
  console.log("show");
  dispatch({
    type: SHOW_LOADER,
  });
};

showLoader();

export const hideLoader = () => async (dispatch) => {
  console.log("hide");
  dispatch({
    type: HIDE_LOADER,
  });
};

export const register = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    currency,
    language,
    zipCode,
    country,
    state,
    city,
    streetAddress,
    role,
  } = data;
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    phone,
    currency,
    zipCode,
    language,
    country,
    state,
    city,
    streetAddress,
    role,
  });
  const url = "https://bitkash.herokuapp.com/user/signup";

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data)
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const login = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { email, password } = data;

  const url = "https://bitkash.herokuapp.com/user/signin";

  const body = JSON.stringify({ email, password });
  console.log(body)
  dispatch({
    type: SHOW_LOADER,
  });
  await axios
    .post(url, body, config)
    .then((data) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.data,
      });
    })
    .catch((errors) => {
      console.log(errors);
      dispatch({
        type: LOGIN_FAIL,
        payload: errors,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const recoverPassword = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { email } = data;

  const url = "https://bitkash.herokuapp.com/recover-password/email";

  const body = JSON.stringify({ email });

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data)
      dispatch({
        type: RECOVER_PASSWORD,
        payload: data.data,
      });
    })
    .catch((errors) => {
      console.log(errors)
      dispatch({
        type: RECOVER_PASSWORD_FAILED,
        payload: errors.data,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const submitNewPassword = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const url = "https://bitkash.herokuapp.com/recover-password/reset-now";
  const { password, id, token } = data;
  console.log(data)
  const body = JSON.stringify({ password, token, id });
  // console.log(body)

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data)
      dispatch({
        type: SUBMIT_NEW_PASSWORD_SUCCESS,
        payload: data.data,
      });
    })
    .catch((errors) => {
      console.log(errors)
      dispatch({
        type: SUBMIT_NEW_PASSWORD_FAILED,
        payload: errors.data,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const submitOTP = (data) => async (dispatch) => {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  const url = "https://bitkash.herokuapp.com/user/verify-phone";
  const { code, uid } = data;
  
  

}


export const sendOtp = (uid) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  const url = "https://bitkash.herokuapp.com/user/resend-code";
  const body = JSON.stringify({uid})
  
  await axios.post(url, body, config)
    .then((data) => {
      console.log(data)
    })
    .catch((errors) => {
      console.log(errors)
    })
}

