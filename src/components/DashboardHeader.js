import { Container, Stack, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import user from "../assets/images/ellipse.png";

const DashboardHeader = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const userDetails = useSelector((state) => state.auth.userDetails);

  console.log(userDetails);

  return (
    <div>
      {isAuthenticated && (
        <Box className="dashboard-header">
          <Container style={{ display: "flex", justifyContent: "flex-end" }}>
            <Box className="dashboard-container">
              <Stack spacing={2} direction="row">
                <img className="user" src={user} alt="" />
                <Stack>
                  <h6>
                    {userDetails?.first_name} {userDetails?.last_name}
                  </h6>

                  {userDetails?.has_completed_kyc ? (
                    <p>Verified</p>
                  ) : (
                    <p>Unverified</p>
                  )}
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
      )}
    </div>
  );
};

export default DashboardHeader;
