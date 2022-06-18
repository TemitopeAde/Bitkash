import { Box, Container } from "@mui/material";
import React from "react";
import Icon from "../assets/images/Vector.png";

import "./customer.css";

const CustomerLove = () => {
  return (
    <Box className="customer">
      <Container>
        <h3 className="cust-title text-center">Why Our Customer Love us</h3>

        <div className="customer-flex">
          <div className="customer-items">
            <div>
              <img src={Icon} alt="icon" />
            </div>
            <div>
              <h3>Easy to use</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sem est habitasse ultrices. Hendrerit scelerisque amet iaculis
                laoreet arcu. Augue viverra tellus malesuada sit et sed facilisi
                nulla. Dui eu suspendisse varius.
              </p>
            </div>
          </div>
          
          <div className="customer-items">
            <div>
              <img src={Icon} alt="icon" />
            </div>
            <div>
              <h3>Safe and secure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sem est habitasse ultrices. Hendrerit scelerisque amet iaculis
                laoreet arcu. Augue viverra tellus malesuada sit et sed facilisi
                nulla. Dui eu suspendisse varius.
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={Icon} alt="icon" />
            </div>
            <div>
              <h3>Easy to useFast track verification</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sem est habitasse ultrices. Hendrerit scelerisque amet iaculis
                laoreet arcu. Augue viverra tellus malesuada sit et sed facilisi
                nulla. Dui eu suspendisse varius.
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={Icon} alt="icon" />
            </div>
            <div>
              <h3>Swift transactions</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sem est habitasse ultrices. Hendrerit scelerisque amet iaculis
                laoreet arcu. Augue viverra tellus malesuada sit et sed facilisi
                nulla. Dui eu suspendisse varius.
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={Icon} alt="icon" />
            </div>
            <div>
              <h3>Quick response</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sem est habitasse ultrices. Hendrerit scelerisque amet iaculis
                laoreet arcu. Augue viverra tellus malesuada sit et sed facilisi
                nulla. Dui eu suspendisse varius.
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={Icon} alt="icon" />
            </div>
            <div>
              <h3>Quick response</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sem est habitasse ultrices. Hendrerit scelerisque amet iaculis
                laoreet arcu. Augue viverra tellus malesuada sit et sed facilisi
                nulla. Dui eu suspendisse varius.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default CustomerLove;
