import axios from "axios";
import React, { useState } from "react";
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
} from "../action-creators/types";

export const showLoader = () => async (dispatch) => {
  console.log("show loader")
  dispatch({
    type: SHOW_LOADER,
  });
};

showLoader()

export const hideLoader = () => async (dispatch) => {
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

  await axios
    .post(url, body, config)
    .then((data) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.data,
      });

      dispatch({
        type: HIDE_LOADER
      })
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error,
      });
      dispatch({
        type: HIDE_LOADER
      })
    });
};

export const login = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url = "https://bitkash.herokuapp.com/user/signup";
}


