import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";

import "./dashboard.css";
import user from "../assets/images/ellipse.png";
import MobileNav from "../components/mobileNav";
import Sidebar from "../components/Sidebar";

const Buy = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const initialValues = {
    bitcoin: "567",
    price: "",
    currency: "",
    wallet: "",
    toggle: false,
  };

  const submitForm = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};

    if (values.toggle === false) {
      errors.toggle = "Accept the ...";
    }

    if (!values.price) {
      errors.price = "Price is required";
    } else if (values.price < 100) {
      errors.price = "Invalid Price";
    }

    if (!values.wallet) {
      errors.wallet = "Bitcoin wallet address is required";
    } else if (values.wallet.length < 26) {
      errors.wallet = "Invalid wallet address";
    } else if (values.wallet.length > 35) {
      errors.wallet = "Invalid wallet address";
    }

    return errors;
  };

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  if (window.innerWidth > 820) {
    return (
      <Box>
        <Helmet>
          <title>Buy Bitcoin</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
          <body class="" />
        </Helmet>
        <Box className="dashboard">
          <Box className="dashboard-grid">
            <Sidebar />

            <Box className="dashboard-content">
              <Box className="dashboard-header">
                <Container
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Box className="dashboard-container">
                    <Stack spacing={2} direction="row">
                      <img className="user" src={user} alt="" />
                      <Stack>
                        <h6>Olubanjo Oluseyi</h6>
                        <p>Verified</p>
                      </Stack>
                      <Box paddingTop="6px">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0201 2.91016C8.71009 2.91016 6.02009 5.60016 6.02009 8.91016V11.8002C6.02009 12.4102 5.76009 13.3402 5.45009 13.8602L4.30009 15.7702C3.59009 16.9502 4.08009 18.2602 5.38009 18.7002C9.69009 20.1402 14.3401 20.1402 18.6501 18.7002C19.8601 18.3002 20.3901 16.8702 19.7301 15.7702L18.5801 13.8602C18.2801 13.3402 18.0201 12.4102 18.0201 11.8002V8.91016C18.0201 5.61016 15.3201 2.91016 12.0201 2.91016Z"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          />
                          <path
                            d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                            stroke="#4C4C4C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </Box>
                    </Stack>
                  </Box>
                </Container>
              </Box>

              <Box
                className="dashboard-inner py-5 dashboard-padding"
                sx={{ background: "none" }}
              >
                <Container style={{ paddingTop: "3rem" }}>
                  <Box className="overview">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <h4 className="mb-4">
                          You are buying Bitcoin at <span>$24,000</span>{" "}
                        </h4>
                        <p>
                          The Bitcoin exchange rate will refresh in 10 minutes
                        </p>
                      </Box>
                      <Box>
                        <svg
                          width="90"
                          height="90"
                          viewBox="0 0 59 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M43.9736 24.4999C43.9736 32.4966 37.4487 38.9724 29.3975 38.9724C21.3463 38.9724 14.8101 32.4938 14.8101 24.4999C14.8101 16.5059 21.3435 10.0161 29.3975 10.0161C37.4487 10.0189 43.9736 16.5059 43.9736 24.4999Z"
                            fill="url(#paint0_linear_2005_16555)"
                          />
                          <path
                            d="M44.4224 37.4404C44.5522 37.278 46.0981 35.2893 47.3817 31.9898C47.3986 31.9562 47.4155 31.9113 47.424 31.8777C47.9346 30.6789 48.3126 29.4185 48.5637 28.1076C48.7978 26.9256 48.9163 25.6904 48.9163 24.4412C48.9163 23.4468 48.8373 22.4609 48.6906 21.503C48.6116 20.9624 48.5016 20.433 48.3718 19.9092C48.3549 19.8504 48.3464 19.7888 48.3295 19.73C48.2082 19.2342 48.0615 18.744 47.8979 18.2567C47.8725 18.1782 47.8471 18.1026 47.8189 18.0326C47.6468 17.5536 47.4663 17.0887 47.266 16.6349C47.2321 16.5565 47.1983 16.4893 47.1616 16.4108C46.9472 15.9571 46.7215 15.5033 46.4789 15.0664C46.4451 15.0159 46.4197 14.9543 46.383 14.9039C46.1235 14.4502 45.847 14.0048 45.5621 13.5763C45.5452 13.5594 45.5367 13.551 45.5283 13.5342C45.2349 13.1057 44.9246 12.694 44.5973 12.2906C44.5635 12.2486 44.5381 12.2122 44.5099 12.1786C44.1826 11.7836 43.8441 11.4167 43.5 11.047C43.4407 10.9966 43.3871 10.9349 43.3363 10.8845C42.9922 10.5344 42.6367 10.1983 42.2672 9.87338C42.1995 9.82297 42.1374 9.76135 42.0697 9.71093C41.6973 9.39442 41.3108 9.08631 40.9131 8.79502C40.8538 8.753 40.7918 8.70819 40.7241 8.66617C40.3094 8.36647 39.8862 8.09197 39.4462 7.82588C39.4123 7.80067 39.3785 7.78387 39.3418 7.76706C38.8932 7.50097 38.4362 7.25169 37.9708 7.03041C37.9454 7.0136 37.92 7.0052 37.8918 6.9884C37.4263 6.76432 36.9411 6.55985 36.4587 6.37218C36.391 6.34698 36.3205 6.32177 36.2528 6.29376C35.7873 6.1145 35.3021 5.96044 34.8112 5.8232C34.7238 5.79799 34.6476 5.77278 34.5602 5.75597C34.0693 5.61873 33.5756 5.50669 33.0763 5.41426C32.9889 5.39745 32.9042 5.38064 32.8253 5.36384C32.3062 5.27701 31.7899 5.20138 31.2624 5.15097C31.2032 5.15097 31.1327 5.14256 31.0734 5.14256C30.5205 5.09215 29.9591 5.06414 29.3893 5.06414C29.3893 5.06414 28.7235 5.08094 28.4047 5.09775C25.0901 5.2602 21.9926 6.24614 19.307 7.84829L21.3014 2.20996H6.53346L10.418 5.98845C1.19893 13.7191 -0.58677 27.3374 6.62091 37.1911C7.45875 38.3311 8.36429 39.3675 9.34882 40.303C8.64075 39.9613 7.94114 39.5047 7.26128 38.9502C6.58705 38.3928 5.94104 37.7345 5.32042 37.0035C5.01857 36.6338 4.71673 36.25 4.42334 35.8467C3.26673 34.2277 2.27373 32.3343 1.51488 30.3008C0.953501 28.7827 0.53035 27.1805 0.270817 25.57C0.0959143 24.5 0.00846303 23.4216 0 22.3573C0 21.2873 0.0789882 20.2313 0.259533 19.2118C0.372373 18.5956 0.502139 17.9962 0.657295 17.3856C1.26099 14.9767 2.23706 12.6463 3.54883 10.4868C4.53336 8.85944 5.71536 7.33291 7.08637 5.92683L1.05224 0H27.5838C27.9449 0 28.3173 0.0168058 28.6812 0.0336115C33.429 0.221276 38.0723 1.62736 42.05 4.22385C44.2165 5.63833 46.1235 7.33572 47.582 9.27958C53.8728 17.6264 52.8826 30.1916 44.4224 37.4404Z"
                            fill="url(#paint1_linear_2005_16555)"
                          />
                          <path
                            d="M57.6105 33.3959C56.4285 36.9447 54.4425 40.261 51.7062 43.062L57.7318 49H31.2002C30.8392 49 30.4752 48.9832 30.1142 48.958C25.3579 48.7703 20.723 47.3727 16.7369 44.7762C14.5704 43.3617 12.6719 41.6559 11.2049 39.7204C4.92255 31.3652 5.90426 18.7945 14.3814 11.5428C12.8722 13.4362 11.8453 15.7246 11.188 17.5424C11.1711 17.576 11.1626 17.6209 11.1457 17.6545C10.8523 18.4163 10.6097 19.1978 10.4207 20.0017C10.3784 20.1977 10.3332 20.3518 10.3079 20.4638C10.2994 20.5142 10.2825 20.5675 10.274 20.6263C10.2655 20.6767 10.2571 20.7047 10.2571 20.7047C10.006 21.9483 9.86778 23.234 9.86778 24.5532C9.86778 25.556 9.94676 26.5335 10.0935 27.4914C10.1809 28.032 10.2909 28.5614 10.4122 29.0936C10.4292 29.144 10.4376 29.2056 10.4545 29.2644C10.5843 29.7602 10.731 30.2588 10.8946 30.7377C10.92 30.8162 10.9454 30.8918 10.9736 30.9702C11.1372 31.4408 11.3262 31.9029 11.5265 32.3595C11.5604 32.4379 11.5942 32.5136 11.6309 32.5836C11.8368 33.0457 12.0625 33.4911 12.3051 33.928C12.339 33.9869 12.3728 34.0401 12.4095 34.0989C12.6606 34.5443 12.937 34.9896 13.2304 35.4182C13.2389 35.435 13.2473 35.4518 13.2558 35.4602C13.5577 35.8887 13.868 36.3089 14.1952 36.7122C14.2206 36.7458 14.246 36.7794 14.2827 36.8158C14.6014 37.2108 14.94 37.5861 15.2926 37.9474C15.3434 38.0062 15.397 38.0595 15.4477 38.1099C15.7919 38.46 16.1558 38.7961 16.5254 39.121C16.5846 39.1798 16.6551 39.2331 16.7144 39.2919C17.0952 39.6084 17.4732 39.9165 17.8794 40.1994C17.9387 40.2498 18.0007 40.2946 18.06 40.3366C18.4747 40.6279 18.8978 40.9108 19.3379 41.1685C19.3718 41.1937 19.4169 41.2105 19.4507 41.2357C19.8908 41.4934 20.3478 41.7427 20.8218 41.9724C20.8471 41.9808 20.8641 41.9976 20.9007 42.006C21.3662 42.2385 21.8401 42.4346 22.3338 42.6222C22.4015 42.6474 22.4636 42.6726 22.5313 42.7007C23.0052 42.8799 23.4904 43.034 23.9728 43.1796C24.0603 43.1964 24.1449 43.2216 24.2239 43.2468C24.7147 43.3757 25.2084 43.4961 25.7162 43.5886C25.7952 43.6054 25.8798 43.6138 25.9673 43.6306C26.4779 43.7258 26.9941 43.793 27.5301 43.8434C27.5894 43.8518 27.6514 43.8518 27.7107 43.8602C28.272 43.9023 28.8334 43.9387 29.4033 43.9387C29.4033 43.9387 29.5669 43.9303 29.7756 43.9219C29.8716 43.9219 29.99 43.9135 30.0944 43.9135C30.1988 43.9135 30.3003 43.9051 30.3878 43.9051C33.7025 43.7342 36.7999 42.7567 39.4771 41.1461L37.4911 46.7929H52.2675L48.3745 43.006C49.8161 41.7987 51.0771 40.4431 52.1462 38.9866C53.8642 36.6562 55.097 34.0429 55.8305 31.3175C56.011 30.6313 56.1577 29.9367 56.279 29.2448C57.2889 23.332 56.0026 17.0327 52.1716 11.7977C51.3422 10.6661 50.4282 9.62971 49.4437 8.68579C50.1602 9.02751 50.8599 9.49247 51.5313 10.0471C52.2055 10.6044 52.86 11.2543 53.4721 11.9825C53.7824 12.3522 54.0758 12.736 54.3692 13.1393C54.9475 13.9544 55.4835 14.8283 55.9743 15.761C56.2169 16.2232 56.4483 16.7049 56.6655 17.1923C57.1056 18.1698 57.4864 19.1894 57.7967 20.2257C57.9519 20.7495 58.0901 21.2789 58.2114 21.8111C58.8236 24.4664 58.9872 27.2197 58.5302 29.7798C58.3101 31.0038 58.0083 32.2139 57.6105 33.3959Z"
                            fill="url(#paint2_linear_2005_16555)"
                          />
                          <path
                            d="M35.9114 26.8416C35.8465 26.4775 35.7506 26.1273 35.5785 25.7996C35.1385 24.9565 34.4445 24.3963 33.5587 24.0602C33.4092 24.0042 33.2597 23.9538 33.1102 23.9006C33.1158 23.8866 33.1186 23.881 33.1214 23.881C33.1355 23.8726 33.1497 23.867 33.1638 23.8586C33.8239 23.5981 34.3994 23.2199 34.8423 22.657C35.1751 22.234 35.3726 21.755 35.4431 21.2257C35.4854 20.9007 35.4685 20.5758 35.4149 20.2509C35.3472 19.8476 35.2062 19.4751 34.9946 19.1305C34.5122 18.3407 33.7505 17.9149 32.9127 17.5984C32.5093 17.4472 32.089 17.3519 31.6573 17.2987C31.4091 17.2679 31.4119 17.2539 31.4119 17.0046C31.4119 16.394 31.4119 15.7806 31.4119 15.17C31.4119 15.0019 31.4006 14.9935 31.237 14.9935C30.9239 14.9935 30.6079 14.9935 30.2948 14.9935C30.1086 14.9935 30.103 14.9991 30.103 15.1896C30.103 15.7974 30.103 16.4052 30.103 17.013C30.103 17.0354 30.103 17.055 30.1001 17.0718V17.1867H28.6671V15.0832C28.653 15.0159 28.6106 14.9907 28.5204 14.9907C28.1903 14.9963 27.8603 14.9907 27.5302 14.9935C27.3807 14.9935 27.375 15.0019 27.375 15.1476C27.375 15.7638 27.375 16.38 27.375 16.9962C27.375 17.1699 27.375 17.1699 27.2001 17.1699C25.7925 17.1699 24.3848 17.1699 22.9771 17.1699C22.8276 17.1699 22.8219 17.1783 22.8191 17.3211C22.8191 17.7917 22.8191 18.2594 22.8191 18.73C22.8191 18.9093 22.8304 18.9233 23.0194 18.9233C23.4285 18.9233 23.8375 18.9233 24.2494 18.9261C24.3396 18.9261 24.4327 18.9289 24.5202 18.9513C24.8841 19.0493 25.1888 19.4106 25.1859 19.842C25.1803 21.2369 25.1831 22.6289 25.1831 24.0238C25.1831 25.7212 25.1831 27.4186 25.1803 29.116C25.1803 29.2336 25.1718 29.3568 25.1323 29.4633C24.9687 29.9086 24.6161 30.0907 24.1591 30.0963C23.7529 30.1019 23.3495 30.1019 22.9432 30.0991C22.8332 30.0991 22.8135 30.1495 22.8135 30.2448C22.8163 30.7097 22.8163 31.1775 22.8163 31.6424C22.8163 31.8217 22.8163 31.8217 22.994 31.8217C24.3989 31.8217 25.8009 31.8217 27.2058 31.8189C27.3722 31.8189 27.3722 31.8189 27.3722 31.9897C27.3722 32.6144 27.375 33.2362 27.3694 33.8608C27.3694 33.9644 27.4061 34.0008 27.5076 33.998C27.8377 33.9952 28.1677 33.998 28.4978 33.9952C28.6671 33.9952 28.6671 33.9924 28.6671 33.8216C28.6671 33.2166 28.6671 32.6144 28.6671 32.0094V31.8021H30.0973V33.8916C30.103 33.9532 30.1255 33.9952 30.2073 33.9952C30.5684 33.9924 30.9323 33.9924 31.2934 33.9952C31.3696 33.9952 31.4006 33.956 31.4034 33.886C31.4034 33.844 31.4063 33.7992 31.4063 33.7544C31.4063 33.0989 31.4063 32.4435 31.4063 31.7881C31.4063 31.7041 31.4204 31.6592 31.5219 31.6368C31.9733 31.5388 32.4247 31.4408 32.8704 31.3147C33.3838 31.1691 33.8634 30.9422 34.295 30.6285C34.7746 30.2812 35.1667 29.8498 35.4657 29.3372C35.7252 28.8891 35.8691 28.4045 35.934 27.8975C35.9848 27.5502 35.9763 27.1973 35.9114 26.8416ZM28.6078 19.6375C29.1805 19.5759 29.756 19.5479 30.3315 19.5983C30.7969 19.6403 31.2455 19.7496 31.6207 20.0549C31.9169 20.2957 32.0805 20.6038 32.12 20.9764C32.1792 21.5282 32.0523 22.0211 31.6037 22.3881C31.268 22.6626 30.8731 22.8026 30.4499 22.881C29.8321 22.9987 29.2059 22.937 28.5853 22.9539C28.4922 22.9567 28.4611 22.923 28.4611 22.8306C28.464 22.3208 28.464 21.8111 28.464 21.3041C28.464 20.8027 28.4668 20.3013 28.4611 19.8C28.4583 19.6851 28.4978 19.6515 28.6078 19.6375ZM32.45 27.7267C32.3287 28.3317 31.9789 28.7742 31.4147 29.0403C31.0057 29.2336 30.5712 29.3204 30.1199 29.3596C29.6093 29.4045 29.1043 29.3653 28.5965 29.3512C28.4922 29.3484 28.4611 29.3148 28.4611 29.2112C28.4668 28.5838 28.464 27.9564 28.464 27.329C28.464 26.7099 28.4668 26.0881 28.4611 25.4691C28.4611 25.3599 28.495 25.3263 28.6022 25.3291C29.1213 25.3403 29.646 25.3179 30.1622 25.3627C30.8223 25.4187 31.4627 25.5756 31.9705 26.0517C32.1736 26.2422 32.3118 26.4719 32.3964 26.7351C32.5036 27.0601 32.5149 27.3962 32.45 27.7267Z"
                            fill="white"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2005_16555"
                              x1="29.3922"
                              y1="10.0177"
                              x2="29.3922"
                              y2="38.9741"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FFD401" />
                              <stop offset="1" stop-color="#FE7E10" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_2005_16555"
                              x1="-3.42651"
                              y1="11.4214"
                              x2="33.998"
                              y2="25.0817"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FFD401" />
                              <stop offset="1" stop-color="#FE7E10" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_2005_16555"
                              x1="58.7206"
                              y1="28.845"
                              x2="17.8784"
                              y2="28.845"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FFD401" />
                              <stop offset="1" stop-color="#FE7E10" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </Box>
                    </Stack>
                  </Box>

                  <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={submitForm}
                  >
                    {(formik) => {
                      const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty,
                      } = formik;
                      return (
                        <Form>
                          <Box className="dashboard-form">
                            <Box>
                              <label htmlFor="dashboard-price">Currency</label>
                              <Field
                                as="select"
                                name="currency"
                                onBlur={handleBlur}
                                className={
                                  errors.currency && touched.currency
                                    ? "input-error form-control"
                                    : "form-control"
                                }
                              >
                                {/* <option disabled value="">
                                  Select a currency
                                </option> */}
                                <option>EUR</option>
                                <option>USD</option>
                              </Field>
                              <ErrorMessage
                                name="currency"
                                component="span"
                                className="error"
                              />
                            </Box>

                            <Box>
                              <label htmlFor="dashboard-price">Price</label>
                              <Field
                                type="number"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.price && touched.price
                                    ? "input-error form-control"
                                    : "form-control"
                                }
                              />
                              <ErrorMessage
                                name="password"
                                component="span"
                                className="error"
                              />
                            </Box>

                            <Box>
                              <label htmlFor="dashboard-price">
                                Bitcoin Equivalent
                              </label>
                              <Field
                                type="number"
                                name="bitcoin"
                                readOnly
                                value={values.bitcoin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.bitcoin && touched.bitcoin
                                    ? "input-error form-control"
                                    : "form-control"
                                }
                              />
                              <ErrorMessage
                                name="password"
                                component="span"
                                className="error"
                              />
                            </Box>
                          </Box>

                          <Box className="wallet-address-grid">
                            <Box className="mb-5 mt-5 dashboard-form-single">
                              <label htmlFor="wallet-adresss">
                                Bitcoin Wallet Addresss
                              </label>
                              <Field
                                type="text"
                                name="wallet"
                                value={values.wallet}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.wallet && touched.wallet
                                    ? "input-error form-control"
                                    : "form-control"
                                }
                              />
                              <ErrorMessage
                                name="wallet"
                                component="span"
                                className="error"
                              />
                            </Box>
                          </Box>

                          <Box>
                            <Stack className="mb-4" direction="row" spacing={2}>
                              {/* <input type="checkbox" /> */}
                              <Field name="toggle" type="checkbox" />
                              <h6 className="checkbox-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi libero laboriosam neque
                                ipsam, voluptate omnis non. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Animi
                                libero laboriosam neque ipsam, voluptate omnis
                                non.
                              </h6>
                            </Stack>
                            <ErrorMessage
                              name="toggle"
                              component="span"
                              className="error"
                            />
                          </Box>

                          <button
                            onClick={() => handleSubmit}
                            type="submit"
                            className={
                              dirty && isValid
                                ? "dashboard-buy"
                                : "dashboard-buy disabled-btn"
                            }
                            disabled={!(dirty && isValid)}
                            style={{ flexBasis: "35%" }}
                          >
                            Buy
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  if (window.innerWidth <= 820) {
    return (
      <Box>
        <MobileNav />

        <Box>
          <Box className="dashboard-inner" sx={{paddingTop: '3rem'}}>
            <Container className="mobile-padding">
              <Box
                className="overview"
                style={{ background: "#FFF8EE", borderRadius: "10px", marginTop: '2rem' }}
              >
                <h4 className="mb-4">
                  You are buying Bitcoin at <span>$24,000</span>{" "}
                </h4>
                <p>The Bitcoin exchange rate will refresh in 10 minutes</p>
              </Box>
              <form>
                <Box>
                  <Box className="dashboard-form mobile">
                    <Box>
                      <label className="mb-3" htmlFor="currency-dashboard">
                        Currency
                      </label>
                      <select id="currency-dashboard" className="form-control">
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </Box>

                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent="space-between"
                      className="mt-5"
                    >
                      <Box>
                        <label className="mb-3" htmlFor="dashboard-price">
                          Price
                        </label>
                        <input
                          type="number"
                          id="dashboard-price"
                          className="form-control"
                        />
                      </Box>

                      <Box>
                        <label className="mb-3" htmlFor="bitcoin-equ">
                          Bitcoin Equivalent
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="bitcoin-equ"
                        />
                      </Box>
                    </Stack>
                  </Box>

                  <Box
                    className="mb-5 mt-5 dashboard-form-single"
                    sx={{ position: "relative" }}
                  >
                    <label className="mb-3" htmlFor="wallet-adresss">
                      Bitcoin Wallet Addresss
                    </label>
                    <input
                      type="text"
                      className="form-control paste-container"
                      id="wallet-address"
                    />

                    {/* <button
                      style={{ position: "absolute", top: "0" }}
                      className="paste-btn"
                      // onClick={handlePaste}
                    >
                      Paste
                    </button> */}
                  </Box>

                  <Stack
                    className="mb-4"
                    alignItems="center"
                    direction="row"
                    spacing={5}
                  >
                    <input
                      type="checkbox"
                      style={{ transform: "scale(1.5)" }}
                    />
                    <h6 className="checkbox-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi libero laboriosam neque ipsam, voluptate omnis non.
                    </h6>
                  </Stack>

                  <button type="submit" className="dashboard-buy-mobile mt-4">
                    Buy
                  </button>
                </Box>
              </form>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Buy;
