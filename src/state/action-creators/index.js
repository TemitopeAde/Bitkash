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
  console.log("show")
  dispatch({
    type: SHOW_LOADER,
  });
};

showLoader();

export const hideLoader = () => async (dispatch) => {
  console.log("hide")
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
    type: SHOW_LOADER
  })

  await axios
    .post(url, body, config)
    .then((data) => {
      // console.log(data)
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.data,
      });

      dispatch({
        type: HIDE_LOADER,
      });
    })
    .catch((error) => {
      // console.log(error)
      dispatch({
        type: SIGNUP_FAIL,
        payload: error,
      });
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

  await axios
    .post(url, body, config)
    .then((data) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.data,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      console.log(data)
    })
    .catch((errors) => {
      console.log(errors)
      dispatch({
        type: LOGIN_FAIL,
        payload: errors.data,
      });
      dispatch({
        type: HIDE_LOADER,
      });
    });
};
