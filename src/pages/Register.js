import { Box, Stack } from "@mui/material";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import Register1 from "./Register-1";
import Register2 from "./Register-2";
import "./register.css";
import { register } from "../state/action-creators";
import Spinner from "../components/Spinner";
import PhoneInput from "react-phone-input-2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import AuthHeader from "../components/AuthHeader";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const form1 = useRef();
  const form2 = useRef();
  const [formData, setFormData] = useState({
    firstName: "djkw",
    email: "adesiyantope2014@gmail.com",
    password: "123456",
    password2: "123456",
    currency: "USD",
    lastName: "mkkee3",
    phone: "2347038347584",
    language: "ENG",
    country: "jjs",
    state: "osu",
    city: "drr",
    zipCode: "23412",
    streetAddress: "nnnnnnnnnnnnnnnnn",
    role: 1,
    terms: false,
  });
  const {
    firstName,
    email,
    password,
    password2,
    currency,
    lastName,
    phone,
    language,
    country,
    state,
    city,
    zipCode,
    streetAddress,
    terms,
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    dispatch(register(formData));
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.firstName) {
      errors.firstName = "Firstname is required";
    } else if (values.firstName.length < 2) {
      errors.firstName = "Firstname is too short";
    } else if (/\d/.test(values.firstName)) {
      errors.firstName = "Firstname should not contain number";
    }

    if (!values.lastName) {
      errors.LastName = "Lastname is required";
    } else if (values.lastName.length < 2) {
      errors.lastName = "Lastname is too short";
    } else if (/\d/.test(values.firstName)) {
      errors.lastName = "Lastname should not contain number";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password length is too short";
    }

    if (!values.phone) {
      errors.password = "Phone number is required";
    } else if (values.phone.length > 13) {
      errors.password = "Enter a valid phone number";
    }

    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2.length < 6) {
      errors.password2 = "Password length is too short";
    } else if (values.password !== values.password2) {
      errors.password2 = "Passwords do not match";
    }

    if (!values.state) {
      errors.state = "Enter your home state";
    }

    if (!values.country) {
      errors.country = "Select your home country";
    }

    if (!values.zipCode) {
      errors.zipCode = "Enter your zip code";
    } else if (/[a-zA-Z]/.test(values.zipCode)) {
      errors.zipCode = "Enter a valid zip code";
    } else if (values.zipCode.length !== 5) {
      errors.zipCode = "Enter a valid zip code";
    }

    if (!values.city) {
      errors.city = "Enter your city";
    } else if (values.city.length === 1) {
      errors.city = "Enter a valid city";
    }

    if (!values.streetAddress) {
      errors.streetAddress = "Enter your street address";
    }

    if (values.terms === false) {
      errors.terms = "Kindly accept the terms and conditions";
    }

    return errors;
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loader = useSelector((state) => state.loader.loading);
  const message = useSelector((state) => state.auth.message);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleChanges = (event) => {
    if (event.target.checked) {
      setIsChecked(!isChecked);
    } else {
      setIsChecked(!isChecked);
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  if (loader) {
    return <Spinner />;
  }

  if (width > 820 && !isAuthenticated) {
    return (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <Box className="register-page web-register-page">
          <Box position="relative">
            <Box className="register-sidebar">
              <Box className="register-title">
                <h3>Sign up</h3>
              </Box>
            </Box>

            <Box className="register-content-form">
              {message && (
                <div className="error-container">
                  <h6 className="error-message">{message}</h6>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <Box
                  ref={form1}
                  className={
                    form === 1
                      ? "forms-ref form-one form-toggle"
                      : "forms-ref form-one"
                  }
                >
                  <Register1
                    formData={formData}
                    setFormData={setFormData}
                    handleChange={handleChange}
                    setForm={setForm}
                    phone={phone}
                    handleSubmit={handleSubmit}
                    errors={errors}
                  />
                </Box>
                <Box
                  ref={form2}
                  className={
                    form === 2
                      ? "forms-ref form-two form-toggle"
                      : "forms-ref form-two"
                  }
                >
                  <Register2
                    handleChange={handleChange}
                    setForm={setForm}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    formData={formData}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </motion.div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/email-verification" />;
  }

  if (width <= 820) {
    console.log("small screen");
    return (
      <Box>
        <Helmet>
          <title>Sign up</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="mobile-background" />
        </Helmet>

        <div className="mobile-register-page">
          <AuthHeader />
          <Box>
            <Box mt="8rem">
              <h3>Sign up</h3>

              <Box>
                <Box>
                  {message && (
                    <div className="error-container">
                      <h6 className="error-message">{message}</h6>
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <Box
                      ref={form1}
                      className={
                        form === 1
                          ? "mobile-register-form active"
                          : "mobile-register-form"
                      }
                      style={{ padding: "3rem 1.5rem" }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <p className="step-one-title mb-5">Personal Details</p>
                        <p className="step-one mb-3">Step 1 of 2</p>
                      </Stack>

                      <div className="register-name mobile-register-field">
                        <label htmlFor="first-name">First name</label>
                        <input
                          name="firstName"
                          className="form-control"
                          id="first-name"
                          type="text"
                          onChange={handleChange}
                          value={formData.firstName}
                        />
                        <p className="form-error">{errors?.firstName}</p>
                      </div>
                      <div className="register-last-name mobile-register-field">
                        <label htmlFor="last-name">Last name</label>
                        <input
                          className="form-control"
                          name="lastName"
                          id="last-name"
                          type="text"
                          onChange={handleChange}
                          value={formData.lastName}
                        />
                        <p className="form-error">{errors?.LastName}</p>
                      </div>
                      <div className="register-name mobile-register-field">
                        <label htmlFor="register-email-address">Email</label>
                        <input
                          name="email"
                          className="form-control"
                          id="register-email-address"
                          type="email"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        <p className="form-error">{errors.email}</p>
                      </div>
                      <div className="register-last-name mobile-register-field">
                        <label htmlFor="register-phone">Phone</label>

                        <PhoneInput
                          inputProps={{
                            name: "phone",
                          }}
                          country={"us"}
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e })
                          }
                        />
                        <p className="form-error">{errors?.phone}</p>
                      </div>
                      <div className="register-name mobile-register-field">
                        <label htmlFor="register-password">Password</label>

                        <Box position="relative">
                          <input
                            name="password"
                            className="form-control"
                            type={passwordShown ? "text" : "password"}
                            id="register-password"
                            onChange={handleChange}
                            value={formData.password}
                          />
                          <p className="form-error">{errors?.password}</p>
                          <Box
                            position="absolute"
                            sx={{ right: "20px", top: "13px" }}
                          >
                            {passwordShown ? (
                              <button
                                style={{
                                  background: "none",
                                  outline: "none",
                                  border: "none",
                                }}
                                onClick={togglePassword}
                              >
                                <AiFillEye />
                              </button>
                            ) : (
                              <button
                                style={{
                                  background: "none",
                                  outline: "none",
                                  border: "none",
                                }}
                                onClick={togglePassword}
                              >
                                <AiFillEyeInvisible />
                              </button>
                            )}
                          </Box>
                        </Box>
                      </div>
                      <div className="register-last-name mobile-register-field">
                        <label htmlFor="regsiter-confirm-password">
                          Confirm password
                        </label>

                        <Box position="relative">
                          <input
                            name="password2"
                            className="form-control"
                            type={passwordShown ? "text" : "password"}
                            id="regsiter-confirm-password"
                            value={formData.password2}
                            onChange={handleChange}
                          />
                          <p className="form-error">{errors?.password2}</p>
                          <Box
                            position="absolute"
                            sx={{ right: "20px", top: "7px" }}
                          >
                            {passwordShown ? (
                              <button
                                style={{
                                  background: "none",
                                  outline: "none",
                                  border: "none",
                                }}
                                onClick={togglePassword}
                              >
                                <AiFillEye />
                              </button>
                            ) : (
                              <button
                                style={{
                                  background: "none",
                                  outline: "none",
                                  border: "none",
                                }}
                                onClick={togglePassword}
                              >
                                <AiFillEyeInvisible />
                              </button>
                            )}
                          </Box>
                        </Box>
                      </div>
                      <div className="register-name mobile-register-field">
                        <label htmlFor="register-currency">Currency</label>
                        <select
                          name="currency"
                          id="register-currency"
                          className="form-control"
                          onChange={handleChange}
                          value={formData.currency}
                        >
                          <option>EUR</option>
                          <option>USD</option>
                        </select>
                        <p className="form-error">{errors?.currency}</p>
                      </div>
                      <div className="register-last-name mobile-register-field">
                        <label htmlFor="register-language">
                          Preffered language
                        </label>
                        <select
                          className="form-control"
                          name="language"
                          id="register-language"
                          onChange={handleChange}
                          value={formData.language}
                        >
                          <option>ENG</option>
                          <option>FRA</option>
                        </select>
                        <p className="form-error">{errors?.language}</p>
                      </div>
                      <div className="register-last-name mobile-register-field">
                        <button
                          className="btn"
                          type="button"
                          onClick={() => setForm(2)}
                          style={{
                            width: "129px",
                            background: "#FF9924",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#000000",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </Box>
                    <Box
                      ref={form2}
                      className={
                        form === 2
                          ? "mobile-register-form active"
                          : "mobile-register-form"
                      }
                      style={{ padding: "3rem 1.5rem" }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <p className="step-one-title mb-5">Address Info</p>
                        <p className="step-one mb-3">Step 2 of 2</p>
                      </Stack>
                      <div className="register-name  mobile-register-field">
                        <label htmlFor="country">Country</label>
                        <select
                          className="form-control"
                          id="country"
                          name="country"
                          onChange={handleChange}
                          value={formData.country}
                        >
                          <option disabled>select country</option>
                          <option>Afghanistan</option>
                          <option>Aland Islands</option>
                          <option>Albania</option>
                          <option>Algeria</option>
                          <option>American Samoa</option>
                          <option>Andorra</option>
                          <option>Angola</option>
                          <option>Anguilla</option>
                          <option>Antarctica</option>
                          <option>Antigua and Barbuda</option>
                          <option>Argentina</option>
                          <option>Armenia</option>
                          <option>Aruba</option>
                          <option>Australia</option>
                          <option>Austria</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                          <option>Belarus</option>
                          <option>Belgium</option>
                          <option>Belize</option>
                          <option>Benin</option>
                          <option>Bermuda</option>
                          <option>Bhutan</option>
                          <option>Bolivia</option>
                          <option>Bonairstatius and Saba</option>
                          <option>Bosnia and Herzegovina</option>
                          <option>Botswana</option>
                          <option>Bouvet Island</option>
                          <option>Brazil</option>
                          <option>Britiscean Territory</option>
                          <option>Brunei Darussalam</option>
                          <option>Bulgaria</option>
                          <option>Burkina Faso</option>
                          <option>Burundi</option>
                          <option>Cambodia</option>
                          <option>Cameroon</option>
                          <option>Canada</option>
                          <option>Cape Verde</option>
                          <option>Cayman Islands</option>
                          <option>Central African Republic</option>
                          <option>Chad</option>
                          <option>Chile</option>
                          <option>China</option>
                          <option>Christmas Island</option>
                          <option>Cocos (Keeling) Islands</option>
                          <option>Colombia</option>
                          <option>Comoros</option>
                          <option>
                            Congo Congo, Democratic Republic of the Congo
                          </option>
                          <option>Cook Islands</option>
                          <option>Costa Rica</option>
                          <option>Cote D'Ivoire</option>
                          <option>Croatia</option>
                          <option>Cuba</option>
                          <option>Curacao</option>
                          <option>Cyprus</option>
                          <option>Czech Republic</option>
                          <option>Denmark</option>
                          <option>Djion </option>
                          <option>Dominica</option>
                          <option>Dominican Republic</option>
                          <option>Ecuador</option>
                          <option>Egypt</option>
                          <option>El Salvador</option>
                          <option>Equatorial Guinea</option>
                          <option>Eritrea</option>
                          <option>Estonia</option>
                          <option>Ethiopia</option>
                          <option>Falkland Islands (Malvinas)</option>
                          <option>Faroe Islands</option>
                          <option>Fiji</option>
                          <option>Finland</option>
                          <option>France</option>
                          <option>French Guiana</option>
                          <option>French Polynesia</option>
                          <option>French Southern Territories</option>
                          <option>Gabon</option>
                          <option>Gambia</option>
                          <option>Georgia</option>
                          <option>Germany</option>
                          <option>Ghana</option>
                          <option>Gibraltar</option>
                          <option>Greece</option>
                          <option>Greenland</option>
                          <option>Grenada</option>
                          <option>Guadeloupe</option>
                          <option>Guam</option>
                          <option>Guatemala</option>
                          <option>Guernsey</option>
                          <option>Guinea</option>
                          <option>Guinea-Bissau</option>
                          <option>Guyana</option>
                          <option>Haiti</option>
                          <option>Heard Island and Mcdonald Islands</option>
                          <option>Holy See (Vatican City State)</option>
                          <option>Honduras</option>
                          <option>Hong Kong</option>
                          <option>Hungary</option>
                          <option>Iceland</option>
                          <option>India</option>
                          <option>Indonesia</option>
                          <option>Iran, Islamic Republic of</option>
                          <option>Iraq</option>
                          <option>Ireland</option>
                          <option>Isle of Man</option>
                          <option>Israel</option>
                          <option>Italy</option>
                          <option>Jamaica</option>
                          <option>Japan</option>
                          <option>Jersey</option>
                          <option>Jordan</option>
                          <option>Kazakhstan</option>
                          <option>Kenya</option>
                          <option>Kiribati</option>
                          <option>
                            Korea, Democratic People's Republic of
                          </option>
                          <option>Korea, Republic of</option>
                          <option>Kosovo</option>
                          <option>Kuwait</option>
                          <option>Kyrgyzstan</option>
                          <option>Lao People's Democratic Republic</option>
                          <option>Latvia</option>
                          <option>Lebanon</option>
                          <option>Lesotho</option>
                          <option>Liberia</option>
                          <option>Libyan Arab Jamahiriya</option>
                          <option>Liechtenstein</option>
                          <option>Lithuania</option>
                          <option>Luxembourg</option>
                          <option>Macao</option>
                          <option>
                            Macedonia, the Former Yugoslav Republic of
                          </option>
                          <option>Madagascar</option>
                          <option>Malawi</option>
                          <option>Malaysia</option>
                          <option>Maldives</option>
                          <option>Mali</option>
                          <option>Malta</option>
                          <option>Marshall Islands</option>
                          <option>Martinique</option>
                          <option>Mauritania</option>
                          <option>Mauritius</option>
                          <option>Mayotte</option>
                          <option>Mexico</option>
                          <option>Micronesia, Federated States of</option>
                          <option>Moldova, Republic of</option>
                          <option>Monaco</option>
                          <option>Mongolia</option>
                          <option>Montenegro</option>
                          <option>Montserrat</option>
                          <option>Morocco</option>
                          <option>Mozambique</option>
                          <option>Myanmar</option>
                          <option>Namibia</option>
                          <option>Nauru</option>
                          <option>Nepal</option>
                          <option>Netherlands</option>
                          <option>Netherlands Antilles</option>
                          <option>New Caledonia</option>
                          <option>New Zealand</option>
                          <option>Nicaragua</option>
                          <option>Niger</option>
                          <option>Nigeria</option>
                          <option>Niue</option>
                          <option>Norfolk Island</option>
                          <option>Northern Mariana Islands</option>
                          <option>Norway</option>
                          <option>Oman</option>
                          <option>Pakistan</option>
                          <option>Palau</option>
                          <option>Palestinian Territory, Occupied</option>
                          <option>Panama</option>
                          <option>Papua New Guinea</option>
                          <option>Paraguay</option>
                          <option>Peru</option>
                          <option>Philippines</option>
                          <option>Pitcairn</option>
                          <option>Poland</option>
                          <option>Portugal</option>
                          <option>Puerto Rico</option>
                          <option>Qatar</option>
                          <option>Reunion</option>
                          <option>Romania</option>
                          <option>Russian Federation</option>
                          <option>Rwanda</option>
                          <option>Saint Barthelemy</option>
                          <option>Saint Helena</option>
                          <option>Saint Kitts and Nevis</option>
                          <option>Saint Lucia</option>
                          <option>Saint Martin</option>
                          <option>Saint Pierre and Miquelon</option>
                          <option>Saint Vincent and the Grenadines</option>
                          <option>Samoa</option>
                          <option>San Marino</option>
                          <option>Sao Tome and Principe</option>
                          <option>Saudi Arabia</option>
                          <option>Senegal</option>
                          <option>Serbia</option>
                          <option>Serbia and Montenegro</option>
                          <option>Seychelles</option>
                          <option>Sierra Leone</option>
                          <option>Singapore</option>
                          <option>Sint Maarten</option>
                          <option>Slovakia</option>
                          <option>Slovenia</option>
                          <option>Solomon Islands</option>
                          <option>Somalia</option>
                          <option>South Africa</option>
                          <option>
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option>South Sudan</option>
                          <option>Spain</option>
                          <option>Sri Lanka</option>
                          <option>Sudan</option>
                          <option>Suriname</option>
                          <option>Svalbard and Jan Mayen</option>
                          <option>Swaziland</option>
                          <option>Sweden</option>
                          <option>Switzerland</option>
                          <option>Syrian Arab Republic</option>
                          <option>Taiwan, Province of China</option>
                          <option>Tajikistan</option>
                          <option>Tanzania, United Republic of</option>
                          <option>Thailand</option>
                          <option>Timor-Leste</option>
                          <option>Togo</option>
                          <option>Tokelau</option>
                          <option>Tonga</option>
                          <option>Trinidad and Tobago</option>
                          <option>Tunisia</option>
                          <option>Turkey</option>
                          <option>Turkmenistan</option>
                          <option>Turks and Caicos Islands</option>
                          <option>Tuvalu</option>
                          <option>Uganda</option>
                          <option>Ukraine</option>
                          <option>United Arab Emirates</option>
                          <option>United Kingdom</option>
                          <option>United States</option>
                          <option>United States Minor Outlying Islands</option>
                          <option>Uruguay</option>
                          <option>Uzbekistan</option>
                          <option>Vanuatu</option>
                          <option>Venezuela</option>
                          <option>Viet Nam</option>
                          <option>Virgin Islands, British</option>
                          <option>Virgin Islands, U.s.</option>
                          <option>Wallis and Futuna</option>
                          <option>Western Sahara</option>
                          <option>Yemen</option>
                          <option>Zambia</option>
                          <option>Zimbabwe</option>
                        </select>
                        <p className="form-error">{errors?.currency}</p>
                      </div>
                      <div className="register-last-name  mobile-register-field">
                        <label htmlFor="register-state">State/County</label>
                        <input
                          id="register-state"
                          type="text"
                          className="form-control"
                          name="state"
                          onChange={handleChange}
                          value={formData.state}
                        />
                        <p className="form-error">{errors?.state}</p>
                      </div>
                      <div className="register-city  mobile-register-field">
                        <label
                          
                          htmlFor="register-city"
                        >
                          City
                        </label>
                        <input
                          id="register-city"
                          type="text"
                          className="form-control"
                          name="city"
                          onChange={handleChange}
                          value={formData.city}
                        />
                        <p className="form-error">{errors?.city}</p>
                      </div>
                      <div className="register-last-name  mobile-register-field">
                        <label htmlFor="register-zip">Zip Code</label>
                        <input
                          id="register-zip"
                          type="number"
                          className="form-control"
                          name="zipCode"
                          onChange={handleChange}
                          value={formData.zipCode}
                        />
                        <p className="form-error">{errors?.zipCode}</p>
                      </div>
                      <div className="register-name  mobile-register-field">
                        <label htmlFor="register-street">Street address</label>
                        <textarea
                          id="register-street"
                          name="streetAddress"
                          className="form-control"
                          onChange={handleChange}
                          value={formData.streetAddress}
                        ></textarea>
                        <p className="form-error">{errors?.streetAddress}</p>
                      </div>

                      <div
                        style={{ gridTemplateColumns: "1fr" }}
                        className="register-row"
                      >
                        <Stack
                          alignItems="center"
                          justifyContent="flex-start"
                          direction="row"
                          spacing={2}
                        >
                          <input
                            type="checkbox"
                            onChange={handleChanges}
                            style={{ transform: "scale(1.4)" }}
                            id="register-2-check"
                          />

                          <label htmlFor="register-2-check">
                            I have read and accepted the{" "}
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "rgba(255, 153, 36, 1)",
                              }}
                              to="/"
                            >
                              Terms & conditions
                            </Link>{" "}
                          </label>
                        </Stack>
                      </div>

                      <div
                        style={{ columnGap: "20px" }}
                        className="d-flex justify-content-space-between align-items-center mt-3 register-next"
                      >
                        <button
                          className="btn btn-lg register-previous"
                          onClick={() => setForm(1)}
                          type="button"
                          disabled={loading}
                          style={{ width: "129px", height: "40px" }}
                        >
                          Previous
                        </button>
                        <button
                          type="submit"
                          className="btn btn-lg"
                          disabled={isChecked}
                          style={{ width: "129px", height: "40px" }}
                        >
                          Submit
                        </button>
                      </div>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    );
  }
};

export default Register;
