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
  PHONE_NUMBER_CHANGED,
  PHONE_NUMBER_CHANGED_FAILED,
<<<<<<< HEAD
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
=======
  // FETCH_USER_SUCCESS,
  // FETCH_USER_FAILED,
>>>>>>> master
  KYC_EURO_SUCCESS,
  KYC_EURO_FAILED,
  SHOW_MODAL,
  SHOW_PAY_PAGE,
  TRANSACTION_HISTORY_SUCCESS,
  TRANSACTION_HISTORY_FAILED,
<<<<<<< HEAD
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  KYC_USD_FAILED,
  KYC_USD_SUCCESS,
=======
  // FETCH_PRODUCTS,
  // FETCH_PRODUCTS_FAILED,
  KYC_USD_FAILED,
  KYC_USD_SUCCESS,
  OTP_FAILED,
  OTP_SUCCESS,
  RESET_STATE,
  GET_USER_BANKS_SUCCESS,
  GET_USER_BANKS_FAILED,
>>>>>>> master
} from "../action-creators/types";

export const showLoader = () => async (dispatch) => {
  dispatch({
    type: SHOW_LOADER,
  });
};

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
<<<<<<< HEAD
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
=======

  const {
    first_name,
    last_name,
    email,
    password,
    phone_number,
    currency,
    preferred_language,
    zip_code,
    country,
    state,
    city,
    street_address,
    confirm_password,
  } = data;

  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    password,
    phone_number,
    currency,
    zip_code,
    preferred_language,
    country,
    state,
    city,
    street_address,
    confirm_password,
  });

  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/register";
>>>>>>> master

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
<<<<<<< HEAD
      console.log(data.data);
      localStorage.setItem("userData", body);
=======
      // console.log("submitted")
      const user = JSON.stringify({
        email: email,
        phone_number: phone_number,
      });
      localStorage.setItem("userData", user);

>>>>>>> master
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.data,
      });
<<<<<<< HEAD
      localStorage.setItem("uid", data.data.user);
    })
    .catch((error) => {
=======
    })
    .catch((error) => {
      // console.log(error)
>>>>>>> master
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

export const login = (data) => async (dispatch, getState) => {
<<<<<<< HEAD
  console.log(getState());
=======
>>>>>>> master
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { email, password } = data;

<<<<<<< HEAD
  const url = "https://bitkash.herokuapp.com/user/signin";
=======
  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/login";
>>>>>>> master

  const body = JSON.stringify({ email, password });
  console.log(body);
  dispatch({
    type: SHOW_LOADER,
  });
  await axios
    .post(url, body, config)
    .then((data) => {
<<<<<<< HEAD
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.data,
=======
      const user = data.data.data;
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.data.data,
>>>>>>> master
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

<<<<<<< HEAD
export const logout = (data) => async (dispatch, getState) => {
  console.log("..");
  dispatch({
    type: LOGOUT,
  });
=======
export const logout = () => async (dispatch, getState) => {
  localStorage.removeItem("paymentDetails");

  dispatch({
    type: SHOW_LOADER,
  });

  dispatch({
    type: LOGOUT,
  });

  setTimeout(() => {
    dispatch({
      type: HIDE_LOADER,
    });
  }, [5]);
>>>>>>> master
};

export const recoverPassword = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { email } = data;

<<<<<<< HEAD
  const url = "https://bitkash.herokuapp.com/recover-password/email";
=======
  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/auth/forgot-password";
>>>>>>> master

  const body = JSON.stringify({ email });

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
      dispatch({
        type: RECOVER_PASSWORD,
        payload: data.data,
      });
    })
    .catch((errors) => {
<<<<<<< HEAD
      // console.log(errors);
=======
      console.log(errors);
>>>>>>> master
      dispatch({
        type: RECOVER_PASSWORD_FAILED,
        payload: errors.response.data.message,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

<<<<<<< HEAD
=======
export const verifyEmail = (uid) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url = `https://bitkash-backend.herokuapp.com/api/v1/auth/user/${uid}`;

  await axios
    .get(url, {}, config)
    .then((data) => {
      console.log(data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};

export const changePassword = (data) => async (dispatch) => {};

>>>>>>> master
export const submitNewPassword = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
<<<<<<< HEAD
  const url = "https://bitkash.herokuapp.com/recover-password/reset-now";
  const { password, id, token } = data;
  console.log(data);
  const body = JSON.stringify({ password, token, id });
  // console.log(body)
=======
  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/auth/reset-password";
  const { password, recover_token, confirm_password } = data;
  console.log(data);
  const body = JSON.stringify({
    password,
    recover_token,
    confirm_password,
  });
  console.log(body);
>>>>>>> master

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
      dispatch({
        type: SUBMIT_NEW_PASSWORD_SUCCESS,
        payload: data.data,
      });
    })
    .catch((errors) => {
      console.log(errors);
      dispatch({
        type: SUBMIT_NEW_PASSWORD_FAILED,
        payload: errors.response.data.message,
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
  };

<<<<<<< HEAD
  const url = "https://bitkash.herokuapp.com/user/verify-phone";
  const { code, uid } = data;
};

export const sendOtp = (uid) => async (dispatch) => {
  const object = {
    uid: uid,
  };

=======
  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/auth/verify-sms-otp";
  const { token, uid } = data;

  const body = JSON.stringify({
    token,
    uid,
  });

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
      dispatch({
        type: OTP_SUCCESS,
        payload: data.data.message,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: OTP_FAILED,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const sendOtp = (uid) => async (dispatch) => {
>>>>>>> master
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

<<<<<<< HEAD
  const url = "https://bitkash.herokuapp.com/user/resend-code";
  // const body = JSON.stringify({ uid });
  const data = JSON.stringify(object);

  console.log(data);

  await axios
    .post(url, data, config)
    .then((data) => {
      console.log(data);
    })
    .catch((errors) => {
      console.log(errors);
    });
=======
  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/send-sms-otp";

  const data = { uid };

  await axios
    .post(url, data, config)
    .then((data) => {})
    .catch((errors) => {});
>>>>>>> master
};

export const changeNumber = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const url = "https://bitkash.herokuapp.com/user/edit-phone";
  const { phone, uid } = data;
  const body = JSON.stringify({ phone, uid });
  console.log(data);

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
      dispatch({
        type: PHONE_NUMBER_CHANGED,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: PHONE_NUMBER_CHANGED_FAILED,
        payload: error,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const changeEmail = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url = "https://bitkash.herokuapp.com/user/edit-email";
  const { email, uid } = data;

  const body = JSON.stringify({ email, uid });

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .put(url, body, config)
    .then((data) => {
      console.log(data);
      dispatch({
        type: PHONE_NUMBER_CHANGED,
        payload: data,
      });
    })
    .catch((errors) => {
      console.log(errors);
      dispatch({
        type: PHONE_NUMBER_CHANGED_FAILED,
        payload: errors.response.data.message,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const fetchUser = (data) => async (dispatch) => {
  const uid = data;
<<<<<<< HEAD
  const url = `https://bitkash.herokuapp.com/user/${uid}`;
=======
  const url = `https://bitkash-backend.herokuapp.com/api/v1/auth/user/${uid}`;
>>>>>>> master

  await axios
    .get(url)
    .then((data) => {
      JSON.stringify(
        localStorage.setItem("user", JSON.stringify(data.data.data))
      );
<<<<<<< HEAD
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: data.data,
      });
    })
    .catch((errors) => {
      dispatch({
        type: FETCH_USER_FAILED,
        payload: data.data,
      });
=======
    })
    .catch((errors) => {
      console.log(errors);
>>>>>>> master
    });
};

export const BuyBitcoin = (data) => async (dispatch, getState) => {
  const url = "https://bitkash.herokuapp.com/transactions/create";

<<<<<<< HEAD
=======
  console.log(getState().auth.token);

>>>>>>> master
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  const {
    payment_type,
    crypto_amount,
    fiat_amount,
    reciept_wallet,
    transaction_status,
  } = data;

  const body = JSON.stringify({
    payment_type,
    crypto_amount,
    fiat_amount,
    reciept_wallet,
    transaction_status,
  });

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    })
    .then(() => {
      dispatch({
        type: SHOW_PAY_PAGE,
      });
    })
    .then(() => {
      localStorage.setItem("paymentDetails", body);
    });
};

export const getAllTransactions = () => async (dispatch, getState) => {
  const url = "https://bitkash.herokuapp.com/transactions/get/all";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .get(url, options)
    .then((data) => {
      console.log("success");
      dispatch({
        type: TRANSACTION_HISTORY_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      console.log("failed");
      dispatch({
        type: TRANSACTION_HISTORY_FAILED,
        payload: err,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const getTransaction = (data) => async (dispatch, getState) => {
  const { uid } = data;
  const url = `https://bitkash.herokuapp.com/transactions/get/:${uid}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .get(url, {}, config)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const deleteTransaction = (data) => async (dispatch, getState) => {
  const { uid } = data;
  const url = `https://bitkash.herokuapp.com/transactions/delete/:${uid}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .get(url, {}, config)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const handleKycUsd = (data) => async (dispatch, getState) => {
<<<<<<< HEAD
  const token = localStorage.getItem("token");
  const url = "https://bitkash.herokuapp.com/account/create-usa-acc";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const {
    currency,
    acc_type,
    acc_number,
    acc_option,
    acc_owner,
    bank_name,
    swift_code,
    routing_number,
    zip_code,
=======
  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/transactions/add-usd-bank";

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  console.log(getState().auth.token);

  const {
    currency,
    account_type,
    account_number,
    acc_option,
    account_holder_name,
    name,
    swift_or_bic_code,
    routing_number,
    postal_code,
    bank_account_type,
>>>>>>> master
  } = data;

  dispatch({
    type: SHOW_LOADER,
  });

  const body = JSON.stringify({
    currency,
<<<<<<< HEAD
    acc_type,
    acc_option,
    acc_owner,
    bank_name,
    acc_number,
    routing_number,
    zip_code,
    swift_code,
  });

  
  await axios
    .post(url, body, config)
    .then((data) => {
      localStorage.setItem("kycStatus", data.data.message)
      dispatch({
        type: KYC_USD_SUCCESS,
        payload: data.data.message
      });
    })
    .catch((err) => {
      localStorage.setItem("kycStatus", err.message);
      dispatch({
        type: KYC_USD_FAILED,
        payload: err.message 
      })
=======
    account_type,
    acc_option,
    account_holder_name,
    name,
    account_number,
    routing_number,
    postal_code,
    swift_or_bic_code,
    bank_account_type,
  });

  console.log(body);

  await axios
    .post(url, body, config)
    .then((data) => {
      // localStorage.setItem("kycStatus", data.data.message);
      console.log(data);
      dispatch({
        type: KYC_USD_SUCCESS,
        payload: data.data.message,
      });
    })
    .catch((err) => {
      // localStorage.setItem("kycStatus", err.message);
      console.log(err);
      dispatch({
        type: KYC_USD_FAILED,
        payload: err.message,
      });
>>>>>>> master
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    })
    .then(() => {
      dispatch({
        type: SHOW_MODAL,
      });
    });
};

export const handleKycEuro = (data) => async (dispatch, getState) => {
<<<<<<< HEAD
  const token = localStorage.getItem("token");
  const url = "https://bitkash.herokuapp.com/account/create-eur-acc";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const {
    currency,
    acc_type,
    acc_owner,
    bank_name,
    bank_branch_name,
    Iban,
    swift_code,
    bank_address,
    bank_city,
    zip_code,
    // acc_number
  } = data;
  const body = JSON.stringify({
    currency,
    acc_type,
    acc_owner,
    bank_name,
    bank_branch_name,
    Iban,
    swift_code,
    bank_address,
    bank_city,
    zip_code,
  });

  dispatch({
    type: SHOW_LOADER,
  });


=======
  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/transactions/add-euro-bank";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };
  const {
    account_type,
    account_holder_name,
    name,
    branch_name,
    iban,
    swift_or_bic_code,
    bank_address,
    bank_city,
    postal_code,
  } = data;

  const body = JSON.stringify({
    account_type,
    account_holder_name,
    name,
    branch_name,
    iban,
    swift_or_bic_code,
    bank_address,
    bank_city,
    postal_code,
  });

  console.log(body);

  dispatch({
    type: SHOW_LOADER,
  });
  console.log(getState().auth);
>>>>>>> master
  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
<<<<<<< HEAD
      localStorage.setItem("kycStatus", data.data.message);
      dispatch({
        type: KYC_EURO_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      localStorage.setItem("kycStatus", err.message);
      dispatch({
        type: KYC_EURO_FAILED,
        payload: err.message,
=======
      dispatch({
        type: KYC_EURO_SUCCESS,
        payload: data.data.message,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: KYC_EURO_FAILED,
        payload: err.response.data,
>>>>>>> master
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
<<<<<<< HEAD
    })
    .then(() => {
      dispatch({
        type: SHOW_MODAL,
      });
    });
    
=======
    });
};

export const handleFileSubmit = (data) => async (dispatch, getState) => {
  const { formData } = data;
  const token = localStorage.getItem("token");
  const url = "https://bitkash.herokuapp.com/user/edit-profile";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .post(url, formData, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
>>>>>>> master
};

export const getAccount = () => async (dispatch, getState) => {
  const url = "https://bitkash.herokuapp.com/account/get-account";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  await axios
    .get(url, config)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const getAllAccount = () => async (dispatch, getState) => {
  const url = "https://bitkash.herokuapp.com/account/all-account";
  console.log(getState().auth.token);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  await axios
    .get(url, config)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const getUserBank = () => async (dispatch, getState) => {
<<<<<<< HEAD
  const id = localStorage.getItem("uid");
  const url = `https://bitkash.herokuapp.com/account/get/${id}`;
=======
  const url = `https://bitkash-backend.herokuapp.com/api/v1/transactions/banks`;
>>>>>>> master

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };
<<<<<<< HEAD

  await axios
    .get(url, config)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
=======
  dispatch({
    type: SHOW_LOADER,
  });
  await axios
    .get(url, config)
    .then((data) => {
      console.log(data);

      dispatch({
        type: GET_USER_BANKS_SUCCESS,
        payload: data.data.data,
      });
    })
    .catch((err) => {
      console.log(err);

      dispatch({
        type: GET_USER_BANKS_FAILED,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
>>>>>>> master
};
