import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { AiFillAccountBook } from "react-icons/ai";
import {
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_ALERT,
  SET_ALERT,
  SIGNUP_FAIL,
} from "../action-creators/types";

export const register = (data) => {
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

  return async (dispatch) => {
    const response = await axios.post(url, body, config);
    dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
  };
};
