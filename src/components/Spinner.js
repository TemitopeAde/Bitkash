import React from "react";
import { Grid } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Grid color="#ff9924" />
        
      </div>
    </div>
  );
};

export default Spinner;
