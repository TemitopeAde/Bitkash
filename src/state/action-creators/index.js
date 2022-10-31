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
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  KYC_EURO_SUCCESS,
  KYC_EURO_FAILED,
  SHOW_MODAL,
  SHOW_PAY_PAGE,
  TRANSACTION_HISTORY_SUCCESS,
  TRANSACTION_HISTORY_FAILED,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  KYC_USD_FAILED,
  KYC_USD_SUCCESS,
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
  
  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .post(url, body, config)
    .then((data) => {
      const user = JSON.stringify({
        email: email,
        phone_number: phone_number
      });
      localStorage.setItem("userData", user);
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

export const login = (data) => async (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { email, password } = data;
  

  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/login";

  const body = JSON.stringify({ email, password });
  console.log(body);
  dispatch({
    type: SHOW_LOADER,
  });
  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data.data.user);
      
      dispatch({
        type: LOGIN_SUCCESS,
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

export const logout = (data) => async (dispatch, getState) => {
  dispatch({
    type: LOGOUT,
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
      console.log(data);
      dispatch({
        type: RECOVER_PASSWORD,
        payload: data.data,
      });
    })
    .catch((errors) => {
      // console.log(errors);
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

export const submitNewPassword = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const url = "https://bitkash.herokuapp.com/recover-password/reset-now";
  const { password, id, token } = data;
  console.log(data);
  const body = JSON.stringify({ password, token, id });
  // console.log(body)

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

  const url = "https://bitkash.herokuapp.com/user/verify-phone";
  const { code, uid } = data;
};

export const sendOtp = (token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/send-sms-otp";
  const data = JSON.stringify({ token });


  await axios
    .post(url, data, config)
    .then((data) => {
      console.log(data);
    })
    .catch((errors) => {
      console.log(errors);
    });
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
  const url = `https://bitkash.herokuapp.com/user/${uid}`;

  await axios
    .get(url)
    .then((data) => {
      JSON.stringify(
        localStorage.setItem("user", JSON.stringify(data.data.data))
      );
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: data.data,
      });
    })
    .catch((errors) => {
      dispatch({
        type: FETCH_USER_FAILED,
        payload: errors.data,
      });
    });
};

export const BuyBitcoin = (data) => async (dispatch, getState) => {
  const url = "https://bitkash.herokuapp.com/transactions/create";

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
  } = data;

  dispatch({
    type: SHOW_LOADER,
  });

  const body = JSON.stringify({
    currency,
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
      localStorage.setItem("kycStatus", data.data.message);
      dispatch({
        type: KYC_USD_SUCCESS,
        payload: data.data.message,
      });
    })
    .catch((err) => {
      localStorage.setItem("kycStatus", err.message);
      dispatch({
        type: KYC_USD_FAILED,
        payload: err.message,
      });
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

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
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
      });
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
  const id = localStorage.getItem("uid");
  const url = `https://bitkash.herokuapp.com/account/get/${id}`;

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

