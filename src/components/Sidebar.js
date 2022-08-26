import { Box, Container, Stack } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon1 from "../assets/icons/empty-wallet-tick.svg";
import logo from "../assets/icons/header-white.png";

const Sidebar = () => {
  return (
    <div>
      <Box className="sidebar">
        <Container>
          <Link to="/">
            <img className="logo" src={logo} alt="bitkash" />
          </Link>

          <ul className="nav-icons">
            <li>
              <Link to="/">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.77778 1H1V8.77778H8.77778V1Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0004 1H13.2227V8.77778H21.0004V1Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0004 13.2222H13.2227V20.9999H21.0004V13.2222Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.77778 13.2222H1V20.9999H8.77778V13.2222Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h6>Dashboard</h6>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.033 11.2916C14.683 11.6333 14.483 12.125 14.533 12.65C14.608 13.55 15.433 14.2083 16.333 14.2083H17.9163V15.2C17.9163 16.925 16.508 18.3333 14.783 18.3333H6.35801C6.61635 18.1166 6.84134 17.85 7.01634 17.55C7.32467 17.05 7.49967 16.4583 7.49967 15.8333C7.49967 13.9916 6.00801 12.5 4.16634 12.5C3.38301 12.5 2.65801 12.775 2.08301 13.2333V9.59165C2.08301 7.86665 3.49134 6.45831 5.21634 6.45831H14.783C16.508 6.45831 17.9163 7.86665 17.9163 9.59165V10.7917H16.233C15.7663 10.7917 15.3413 10.975 15.033 11.2916Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.08301 10.3416V6.53336C2.08301 5.54169 2.69134 4.65832 3.61634 4.30832L10.233 1.80832C11.2663 1.41666 12.3747 2.18335 12.3747 3.29168V6.45834"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7987 11.6418V13.3585C18.7987 13.8168 18.432 14.1918 17.9653 14.2085H16.332C15.432 14.2085 14.607 13.5501 14.532 12.6501C14.482 12.1251 14.682 11.6335 15.032 11.2918C15.3403 10.9751 15.7653 10.7918 16.232 10.7918H17.9653C18.432 10.8085 18.7987 11.1834 18.7987 11.6418Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.83301 10H11.6663"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.49967 15.8333C7.49967 16.4583 7.32467 17.05 7.01634 17.55C6.84134 17.85 6.61635 18.1167 6.35801 18.3333C5.77468 18.8583 5.00801 19.1667 4.16634 19.1667C2.94967 19.1667 1.89134 18.5167 1.31634 17.55C1.00801 17.05 0.833008 16.4583 0.833008 15.8333C0.833008 14.7833 1.31634 13.8417 2.08301 13.2333C2.65801 12.775 3.38301 12.5 4.16634 12.5C6.00801 12.5 7.49967 13.9917 7.49967 15.8333Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.86719 15.8329L3.69218 16.6579L5.46718 15.0163"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Buy</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8847 12.8652H7.71802"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.80151 10.8315V14.9982"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.55 2.09828L10.525 2.15662L8.1083 7.76495H5.7333C5.16663 7.76495 4.62497 7.88162 4.1333 8.08995L5.59163 4.60662L5.62497 4.52328L5.6833 4.38995C5.69997 4.33995 5.71663 4.28995 5.74163 4.24828C6.8333 1.72328 8.06663 1.14828 10.55 2.09828Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.0417 7.93197C14.6667 7.8153 14.2667 7.7653 13.8667 7.7653H8.1084L10.5251 2.15697L10.5501 2.09863C10.6751 2.1403 10.7917 2.19863 10.9167 2.24863L12.7584 3.02363C13.7834 3.44863 14.5001 3.8903 14.9334 4.42363C15.0167 4.52363 15.0834 4.6153 15.1417 4.72363C15.2167 4.8403 15.2751 4.95697 15.3084 5.08197C15.3417 5.15697 15.3667 5.23197 15.3834 5.29863C15.6084 5.99863 15.4751 6.85697 15.0417 7.93197Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    
                  />
                  <path
                    d="M17.9348 11.8318V13.4568C17.9348 13.6235 17.9265 13.7901 17.9182 13.9568C17.7598 16.8651 16.1348 18.3318 13.0515 18.3318H6.55151C6.35151 18.3318 6.15151 18.3151 5.95985 18.2901C3.30985 18.1151 1.89318 16.6985 1.71818 14.0485C1.69318 13.8568 1.67651 13.6568 1.67651 13.4568V11.8318C1.67651 10.1568 2.69318 8.71514 4.14318 8.09014C4.64318 7.8818 5.17651 7.76514 5.74318 7.76514H13.8765C14.2848 7.76514 14.6848 7.82347 15.0515 7.9318C16.7098 8.44014 17.9348 9.99014 17.9348 11.8318Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.59175 4.60693L4.13341 8.09027C2.68341 8.71527 1.66675 10.1569 1.66675 11.8319V9.39027C1.66675 7.0236 3.35008 5.0486 5.59175 4.60693Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.9322 9.38988V11.8315C17.9322 9.99821 16.7155 8.43988 15.0488 7.93988C15.4822 6.85654 15.6072 6.00654 15.3988 5.29821C15.3822 5.22321 15.3572 5.14821 15.3238 5.08154C16.8738 5.88154 17.9322 7.52321 17.9322 9.38988Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h6>Transaction History</h6>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h6>Banks</h6>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50008 18.3332H12.5001C16.6667 18.3332 18.3334 16.6665 18.3334 12.4998V7.49984C18.3334 3.33317 16.6667 1.6665 12.5001 1.6665H7.50008C3.33341 1.6665 1.66675 3.33317 1.66675 7.49984V12.4998C1.66675 16.6665 3.33341 18.3332 7.50008 18.3332Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5667 11.3417C12.625 12.2834 11.275 12.575 10.0833 12.2L7.925 14.35C7.775 14.5084 7.46667 14.6084 7.24167 14.575L6.24167 14.4417C5.90833 14.4 5.60833 14.0834 5.55833 13.7584L5.425 12.7584C5.39167 12.5417 5.5 12.2334 5.65 12.075L7.8 9.92503C7.43333 8.73337 7.71667 7.38337 8.65833 6.4417C10.0083 5.0917 12.2083 5.0917 13.5667 6.4417C14.9167 7.78337 14.9167 9.98337 13.5667 11.3417Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.70833 13.5668L8 12.8501"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.1621 8.91667H11.1696"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h6>Security</h6>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.05 10.44L17.2333 14.62C16.5333 18.23 15.15 19.69 12.55 19.39C12.1333 19.35 11.6833 19.26 11.2 19.12L9.79999 18.72C6.32499 17.73 5.24999 15.67 6.06665 11.49L6.88332 7.30001C7.04999 6.45001 7.24999 5.71001 7.49999 5.10001C8.47499 2.68001 10.1333 2.03001 12.9167 2.82001L14.3083 3.21001C17.8 4.19001 18.8667 6.26001 18.05 10.44Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.55 19.3901C12.0334 19.8101 11.3834 20.1601 10.5917 20.4701L9.27504 20.9901C5.96671 22.2701 4.22504 21.2001 3.15004 17.2301L2.08337 13.2801C1.01671 9.3101 1.90004 7.2101 5.20837 5.9301L6.52504 5.4101C6.86671 5.2801 7.19171 5.1701 7.50004 5.1001C7.25004 5.7101 7.05004 6.4501 6.88337 7.3001L6.06671 11.4901C5.25004 15.6701 6.32504 17.7301 9.80004 18.7201L11.2 19.1201C11.6834 19.2601 12.1334 19.3501 12.55 19.3901Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5334 8.52979L14.5751 9.75979"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.71655 12.3999L12.1332 13.1399"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h6>Activities</h6>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.3501 14.6002C8.73343 15.0919 9.33343 15.4169 10.0001 15.4169C11.1501 15.4169 12.0834 14.4836 12.0834 13.3336C12.0834 12.8586 11.9251 12.4169 11.6584 12.0669"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.35008 17.3335C1.84175 16.7002 1.66675 15.6918 1.66675 14.1668V12.5002C1.66675 9.16683 2.50008 8.3335 5.83341 8.3335H14.1667C14.4667 8.3335 14.7417 8.34183 15.0001 8.3585C17.6417 8.5085 18.3334 9.46683 18.3334 12.5002V14.1668C18.3334 17.5002 17.5001 18.3335 14.1667 18.3335H5.83341C5.53341 18.3335 5.25841 18.3252 5.00008 18.3085"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 8.33317V6.6665C5 3.90817 5.83333 1.6665 10 1.6665C13.4583 1.6665 14.6167 2.8165 14.9167 4.63317"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3334 1.6665L1.66675 18.3332"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h6>Logout</h6>
              </Link>
            </li>
          </ul>
        </Container>
      </Box>
    </div>
  );
};

export default Sidebar;
