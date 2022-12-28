import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Calenderdesign from "./Calenderdesign";
import TotalCalculation from "./TotalCalculation";

const RightInformation = ({ seat }) => {
  return (
    <Container>
      
      <Calenderdesign />

      <TotalCalculation seat={seat}/>
    </Container>
  );
};

export default RightInformation;
