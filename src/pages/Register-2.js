import { Box, Container, Stack } from "@mui/material";
import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./register.css";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Register2 = ({
  handleChange,
  setForm,
  errors,
  formData,
  loading,
}) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleChanges = (event) => {
    if (event.target.checked) {
      setIsChecked(!isChecked);
    } else {
      setIsChecked(!isChecked);
    }
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
      // className="mobile-white"
      style={{ borderRadius: "10px" }}
    >
      <Box style={{ paddingBottom: "0rem" }} className="register-content">
        <Container>
          <Box position="relative" style={{ paddingBottom: "4rem" }}>
            <Box
              style={{ borderRadius: "10px", paddingBottom: "3rem" }}
              className="register-form"
              id="form2"
            >
              <Stack>
                <p className="step-one mb-3">Step 2 of 2</p>
                <p className="step-one-title mb-5">Address info</p>
<<<<<<< HEAD
                
=======
>>>>>>> master
              </Stack>

              <Box className="register-form-grid">
                <Box className="register-grid">
                  <div className="register-row">
                    <div className="register-name">
                      <label htmlFor="country">Country</label>
                      <select
                        className="form-control"
                        id="country"
                        name="country"
                        onChange={handleChange}
                        value={formData.country}
                      >
<<<<<<< HEAD
                        <option disabled>select country</option>
=======
                        <option disabled value="">
                          Select country
                        </option>
                        <option>United Kingdom</option>
                        <option>United States</option>
>>>>>>> master
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
                        <option>Korea, Democratic People's Republic of</option>
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
<<<<<<< HEAD
                      <p className="form-error">{errors?.currency}</p>
=======
                      <p className="form-error">{errors?.country}</p>
>>>>>>> master
                    </div>
                    <div className="register-last-name">
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
                  </div>
                  <div className="register-row">
                    <div className="register-city">
                      <label
                        style={{ fontWeight: "bold" }}
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
                    <div className="register-last-name">
                      <label htmlFor="register-zip">Zip Code</label>
                      <input
                        id="register-zip"
                        type="number"
                        className="form-control"
<<<<<<< HEAD
                        name="zipCode"
                        onChange={handleChange}
                        value={formData.zipCode}
                      />
                      <p className="form-error">{errors?.zipCode}</p>
=======
                        name="zip_code"
                        onChange={handleChange}
                        value={formData.zip_code}
                      />
                      <p className="form-error">{errors?.zip_code}</p>
>>>>>>> master
                    </div>
                  </div>
                  <div
                    style={{ gridTemplateColumns: "1fr" }}
                    className="register"
                  >
                    <div className="register-name">
                      <label htmlFor="register-street">Street address</label>
                      <textarea
                        id="register-street"
<<<<<<< HEAD
                        name="streetAddress"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.streetAddress}
                      ></textarea>
                      <p className="form-error">{errors?.streetAddress}</p>
=======
                        name="street_address"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.street_address}
                      ></textarea>
                      <p className="form-error">{errors?.street_address}</p>
>>>>>>> master
                    </div>
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
<<<<<<< HEAD
                        
=======
>>>>>>> master
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
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="btn btn-lg"
                      disabled={isChecked}
                    >
                      Submit
                    </button>
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Register2;
