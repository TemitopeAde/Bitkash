import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bubble from "../assets/icons/bubble.png";
import security from "../assets/icons/security.png";
import send from "../assets/icons/send.png";
import user from "../assets/icons/user-tick.png";

import "./customer.css";

const CustomerLove = () => {
  return (
    <Box className="customer">
      <Container>
        <h3 className="cust-title text-center">
          Why Our <span style={{ color: '#ff9424'}}>Customer {""}</span>Love us
        </h3>

        <div className="customer-flex">
          <div className="customer-items">
            <div>
              <img src={bubble} alt="icon" />
            </div>
            <div>
              <h3>Easy to use</h3>
              <p>
                Our platform is designed for ease-of-use. There are no
                complicated dashboards or processes. You’ve got the money and
                we’ve got the coins.
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={security} alt="icon" />
            </div>
            <div>
              <h3>Safe and secure</h3>
              <p>
                Bitkash is one of the safest mediums to purchase crypto online.
                We’re a real team made of real people with a real setup that is
                designed to protect you and your assets.{" "}
                <Link className="color-yellow" to="/">
                  Learn more
                </Link>{" "}
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={send} alt="icon" />
            </div>
            <div>
              <h3>Beginner-Friendly</h3>
              <p>
                Have zero crypto experience? It doesn’t matter! Get started by
                checking out our Getting{" "}
                <Link className="color-yellow" to="/">
                  Started Page
                </Link>{" "}
                or checking out our{" "}
                <Link className="color-yellow" to="/">
                  FAQs
                </Link>
                . If you need any more assistance, we’d love to chat with you.
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={user} alt="icon" />
            </div>
            <div>
              <h3>Seamless and Fast Processes</h3>
              <p>
                Time is money and Bitkash takes this literally. You can transact
                with us with just a few clicks of the button and be rest assured
                that your transaction will be processed in minutes.{" "}
                <Link className="color-yellow" to="/">
                  Learn more
                </Link>{" "}
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={user} alt="icon" />
            </div>
            <div>
              <h3>24/7 Customer Support </h3>
              <p>
                Bitkash runs on your schedule. Our customer service operations
                are designed to give you confidence and trust in our firm. We’re
                always available and eager to help.{" "}
                <Link className="color-yellow" to="/">
                  chat with us
                </Link>
              </p>
            </div>
          </div>

          <div className="customer-items">
            <div>
              <img src={send} alt="icon" />
            </div>
            <div>
              <h3>Our Newsletter</h3>
              <p>
                When you join the Bitkash family and optionally sign up for our
                Newsletter, we give you an inner look at just what makes us who
                we are. From helpful crypto tips to important crypto news, and
                even promotional offers. We’re always here for you.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default CustomerLove;
