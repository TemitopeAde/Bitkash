import { Box, Stack } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./mobilenav.css";
import logo from "../assets/icons/header.png";
import avatar from "../assets/images/avatar.png";

const MobileNav = () => {
  let activeStyle = {
    color: "#ff9924",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column'
  };
  let navigationStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <Box>
      <Box className="mobile-fixed-nav">
        <Stack
          direction="row"
          p={2}
          alignItems="center"
          justifyContent="space-between"
          style={{border: "0.5px solid #FF9924"}}
        >
          <Link to="/">
            <img src={logo} alt="logo" id="mobile-logo" />
          </Link>

          <Link to="/">
            <img
              style={{ borderRadius: "50%" }}
              src={avatar}
              alt=""
              className="profile-avatar"
            />
          </Link>
        </Stack>
      </Box>
      <Box className="mobile-nav-fixed">
        <Box className="mobile-nav-flex">
          <NavLink
            to="/user-dashboard"
            style={({ isActive }) =>
              isActive ? activeStyle : navigationStyles
            }
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.77778 1H1V8.77778H8.77778V1Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.0004 1H13.2227V8.77778H21.0004V1Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.0004 13.2227H13.2227V21.0004H21.0004V13.2227Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.77778 13.2227H1V21.0004H8.77778V13.2227Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="/buy-bitcoin"
            style={({ isActive }) =>
              isActive ? activeStyle : navigationStyles
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0335 11.2917C14.6835 11.6334 14.4835 12.125 14.5335 12.65C14.6085 13.55 15.4335 14.2084 16.3335 14.2084H17.9168V15.2C17.9168 16.925 16.5085 18.3334 14.7835 18.3334H6.3585C6.61683 18.1167 6.84183 17.85 7.01683 17.55C7.32516 17.05 7.50016 16.4584 7.50016 15.8334C7.50016 13.9917 6.0085 12.5 4.16683 12.5C3.3835 12.5 2.6585 12.775 2.0835 13.2334V9.59172C2.0835 7.86672 3.49182 6.45837 5.21682 6.45837H14.7835C16.5085 6.45837 17.9168 7.86672 17.9168 9.59172V10.7917H16.2335C15.7668 10.7917 15.3418 10.975 15.0335 11.2917Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.0835 10.3417V6.53342C2.0835 5.54175 2.69183 4.65838 3.61683 4.30838L10.2335 1.80838C11.2668 1.41672 12.3752 2.18341 12.3752 3.29174V6.4584"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7992 11.6418V13.3586C18.7992 13.8169 18.4325 14.1919 17.9658 14.2085H16.3325C15.4325 14.2085 14.6075 13.5502 14.5325 12.6502C14.4825 12.1252 14.6825 11.6335 15.0325 11.2918C15.3408 10.9752 15.7658 10.7919 16.2325 10.7919H17.9658C18.4325 10.8085 18.7992 11.1835 18.7992 11.6418Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.8335 10H11.6668"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.50016 15.8333C7.50016 16.4583 7.32516 17.05 7.01683 17.55C6.84183 17.85 6.61683 18.1167 6.3585 18.3333C5.77517 18.8583 5.0085 19.1667 4.16683 19.1667C2.95016 19.1667 1.89183 18.5167 1.31683 17.55C1.0085 17.05 0.833496 16.4583 0.833496 15.8333C0.833496 14.7833 1.31683 13.8417 2.0835 13.2333C2.6585 12.775 3.3835 12.5 4.16683 12.5C6.0085 12.5 7.50016 13.9917 7.50016 15.8333Z"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.86816 15.8329L3.69316 16.6579L5.46816 15.0162"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Buy</p>
          </NavLink>
          <NavLink
            to="/transaction-history"
            style={({ isActive }) =>
              isActive ? activeStyle : navigationStyles
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8849 12.8654H7.71826"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.80127 10.8317V14.9983"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.55 2.09841L10.525 2.15674L8.1083 7.76507H5.7333C5.16663 7.76507 4.62497 7.88174 4.1333 8.09007L5.59163 4.60674L5.62497 4.52341L5.6833 4.39007C5.69997 4.34007 5.71663 4.29007 5.74163 4.24841C6.8333 1.72341 8.06663 1.14841 10.55 2.09841Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0417 7.93172C14.6667 7.81506 14.2667 7.76506 13.8667 7.76506H8.1084L10.5251 2.15672L10.5501 2.09839C10.6751 2.14006 10.7917 2.19839 10.9167 2.24839L12.7584 3.02339C13.7834 3.44839 14.5001 3.89006 14.9334 4.42339C15.0167 4.52339 15.0834 4.61506 15.1417 4.72339C15.2167 4.84006 15.2751 4.95672 15.3084 5.08172C15.3417 5.15672 15.3667 5.23172 15.3834 5.29839C15.6084 5.99839 15.4751 6.85672 15.0417 7.93172Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.9346 11.8319V13.4569C17.9346 13.6236 17.9263 13.7903 17.9179 13.9569C17.7596 16.8653 16.1346 18.3319 13.0513 18.3319H6.55127C6.35127 18.3319 6.15127 18.3153 5.9596 18.2903C3.3096 18.1153 1.89294 16.6986 1.71794 14.0486C1.69294 13.8569 1.67627 13.6569 1.67627 13.4569V11.8319C1.67627 10.1569 2.69294 8.71526 4.14294 8.09026C4.64294 7.88193 5.17627 7.76526 5.74294 7.76526H13.8763C14.2846 7.76526 14.6846 7.82359 15.0513 7.93193C16.7096 8.44026 17.9346 9.99026 17.9346 11.8319Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5915 4.60681L4.13317 8.09014C2.68317 8.71514 1.6665 10.1568 1.6665 11.8318V9.39015C1.6665 7.02348 3.34984 5.04848 5.5915 4.60681Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.9322 9.38975V11.8314C17.9322 9.99809 16.7155 8.43975 15.0488 7.93975C15.4822 6.85642 15.6072 6.00642 15.3988 5.29809C15.3822 5.22309 15.3572 5.14809 15.3238 5.08142C16.8738 5.88142 17.9322 7.52309 17.9322 9.38975Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Transactions</p>
          </NavLink>
          <NavLink
            to="/banks"
            style={({ isActive }) =>
              isActive ? activeStyle : navigationStyles
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1665 17.0833H5.83317C3.33317 17.0833 1.6665 15.8333 1.6665 12.9166V7.08329C1.6665 4.16663 3.33317 2.91663 5.83317 2.91663H14.1665C16.6665 2.91663 18.3332 4.16663 18.3332 7.08329V12.9166C18.3332 15.8333 16.6665 17.0833 14.1665 17.0833Z"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.08333 5H5.83333C4.68333 5 3.75 5.93333 3.75 7.08333V8.33333"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9165 5H14.1665C15.3165 5 16.2498 5.93333 16.2498 7.08333V8.33333"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.08333 15H5.83333C4.68333 15 3.75 14.0666 3.75 12.9166V11.6666"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9165 15H14.1665C15.3165 15 16.2498 14.0666 16.2498 12.9166V11.6666"
                stroke="black"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Banks</p>
          </NavLink>
          <NavLink
            to="/pasword-and-security"
            style={({ isActive }) =>
              isActive ? activeStyle : navigationStyles
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99967 9.99996C12.3009 9.99996 14.1663 8.13448 14.1663 5.83329C14.1663 3.53211 12.3009 1.66663 9.99967 1.66663C7.69849 1.66663 5.83301 3.53211 5.83301 5.83329C5.83301 8.13448 7.69849 9.99996 9.99967 9.99996Z"
                stroke="#292D32"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                stroke="#292D32"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>My Profile</p>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNav;
