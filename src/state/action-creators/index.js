import axios from "axios";

import {
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAIL,
  HIDE_LOADER,
  SHOW_LOADER,
  RECOVER_PASSWORD,
  RECOVER_PASSWORD_FAILED,
  SUBMIT_NEW_PASSWORD_SUCCESS,
  SUBMIT_NEW_PASSWORD_FAILED,
  PHONE_NUMBER_CHANGED,
  PHONE_NUMBER_CHANGED_FAILED,
  KYC_EURO_SUCCESS,
  KYC_EURO_FAILED,
  SHOW_PAY_PAGE,
  TRANSACTION_HISTORY_SUCCESS,
  TRANSACTION_HISTORY_FAILED,
  KYC_USD_FAILED,
  KYC_USD_SUCCESS,
  OTP_FAILED,
  OTP_SUCCESS,
  GET_USER_BANKS_SUCCESS,
  GET_USER_BANKS_FAILED,
  LOGOUT_FAILED,
  NOTIFICATION_FAILED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_MARK_AS_READ_FAILED,
  NOTIFICATION_MARK_AS_READ,
  TOGGLE_LOADING,
  TOGGLE_LOAD,
  TOGGLE_LOAD_FALSE,
  RESET_STATE,
  BUYBITCOIN_SUCCESS,
  BTC_PRICE_SUCCESS,
  BTC_PRICE_FAILED,
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

  console.log(body);

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
      const user = JSON.stringify({
        email: email,
        phone_number: phone_number,
      });
      localStorage.setItem("userData", user);

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.data,
      });
    })
    .catch((error) => {
      console.log(error);
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

  dispatch({
    type: SHOW_LOADER,
  });
  await axios
    .post(url, body, config)
    .then((data) => {
      const user = data.data.data;
      // console.log(user);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.data.data,
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

export const logout = () => async (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };
  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/logout";
  dispatch({
    type: SHOW_LOADER,
  });
  await axios
    .post(url, {}, config)
    .then((data) => {
      console.log(data);
      dispatch({
        type: LOGOUT,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGOUT_FAILED,
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

  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/auth/forgot-password";

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
      console.log(errors);
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

export const submitNewPassword = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
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
        payload: err.response.data.message,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const sendOtp = (uid) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/send-sms-otp";

  const data = { uid };

  await axios
    .post(url, data, config)
    .then((data) => {})
    .catch((errors) => {});
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
  const url = `https://bitkash-backend.herokuapp.com/api/v1/auth/user/${uid}`;

  await axios
    .get(url)
    .then((data) => {
      JSON.stringify(
        localStorage.setItem("user", JSON.stringify(data.data.data))
      );
    })
    .catch((errors) => {
      console.log(errors);
    });
};

export const BuyBitcoin = (data) => async (dispatch, getState) => {
  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/transactions/purchase-btc";

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  const { quote, rate, quantity } = data;

  const body = JSON.stringify({
    quote,
    rate,
    quantity,
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
    });
  // .then(() => {
  //   localStorage.setItem("paymentDetails", body);
  // });
};

export const getAllTransactions = () => async (dispatch, getState) => {
  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/transactions/summary";

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
      console.log("data");

      dispatch({
        type: TRANSACTION_HISTORY_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      console.log(err);

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

export const deleteBank = (bank_id) => async (dispatch, getState) => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getState().auth.token}`,
    },
    data: { bank_id: bank_id },
  };

  dispatch({
    type: SHOW_LOADER,
  });

  await axios
    .request(
      "https://bitkash-backend.herokuapp.com/api/v1/transactions/banks",
      options
    )
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
  } = data;

  dispatch({
    type: SHOW_LOADER,
  });

  const body = JSON.stringify({
    currency,
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

  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
      dispatch({
        type: KYC_USD_SUCCESS,
        payload: data.data.message,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: KYC_USD_FAILED,
        payload: err.message,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });

      dispatch({
        type: TOGGLE_LOAD,
      });
    });
};

export const toggleLoad = () => async (dispatch, getState) => {
  dispatch({
    type: RESET_STATE,
  });
};

export const handleKycEuro = (data) => async (dispatch, getState) => {
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
  await axios
    .post(url, body, config)
    .then((data) => {
      console.log(data);
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
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
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

export const getUserBank = () => async (dispatch, getState) => {
  const url = `https://bitkash-backend.herokuapp.com/api/v1/transactions/banks`;

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
};

export const getNotifications = () => async (dispatch, getState) => {
  const url = `https://bitkash-backend.herokuapp.com/api/v1/auth/notifications`;

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
    .get(url, config)
    .then((data) => {
      console.log(data);
      dispatch({
        type: NOTIFICATION_SUCCESS,
        payload: data.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: NOTIFICATION_FAILED,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};

export const markNotificationsAsRead =
  (notificationRef) => async (dispatch, getState) => {
    const url = `https://bitkash-backend.herokuapp.com/api/v1/auth/notifications/${notificationRef}`;

    const options = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    };

    dispatch({
      type: SHOW_LOADER,
    });

    await axios
      .patch(url, options)
      .then((data) => {
        console.log(data);
        dispatch({
          type: NOTIFICATION_MARK_AS_READ,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: NOTIFICATION_MARK_AS_READ_FAILED,
        });
      })
      .then(() => {
        dispatch({
          type: HIDE_LOADER,
        });
      });
  };

export const enable2fa = (data) => async (dispatch, getState) => {
  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/enable-2fa";
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
    .post(url, {}, config)
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

export const disable2fa = (data) => async (dispatch, getState) => {
  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/disable-2fa";
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
    .post(url, {}, config)
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

export const deleteAcccount = (data) => async (dispatch, getState) => {
  const url = "https://bitkash-backend.herokuapp.com/api/v1/auth/delete-user";
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
    .post(url, {}, config)
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

export const validateOtp = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url =
    "https://bitkash-backend.herokuapp.com/api/v1/auth/verify-user-login-otp";

  const { email, otp } = data;
  const body = JSON.stringify({
    email,
    otp,
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
    });
};

export const BuyBitcoins = (data) => async (dispatch, getState) => {
  const url = `https://bitkash-backend.herokuapp.com/api/v1/transactions/purchase-btc`;
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

  await axios
    .post(url)
    .then((res) => {
      console.log(res);
      dispatch({
        type: BUYBITCOIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((errors) => {
      console.log(errors);
    });
};

export const getBtcPrice = (data) => async (dispatch, getState) => {
  console.log("get price")
  const url = `https://bitkash-backend.herokuapp.com/api/v1/transactions/btc-price`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  await axios
    .get(url, config)
    .then((data) => {
      dispatch({
        type: BTC_PRICE_SUCCESS,
        payload: data.data.data.price,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: BTC_PRICE_FAILED,
      });
    })
    .then(() => {
      dispatch({
        type: HIDE_LOADER,
      });
    });
};
