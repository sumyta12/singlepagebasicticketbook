import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { defaultListboxReducer } from "@mui/base";

const TotalCalculation = ({ seat }) => {
   
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    width:'70%',
    margin:'auto',
    backgroundColor: red[700],
    "&:hover": {
      backgroundColor: red[900],
    },
  }));
    let total = 0;
    let vat = 0;
    let dulex  = 0;
    let totalamount = 0 ;
   for (const itembalance of seat){
    total = total +parseInt(itembalance.balance);
    vat = total / 0.5 ;
    dulex = total - (vat / 5)
    totalamount = total + vat ;
   }
  return (
    <Card sx={{mt:2, minWidth: 270 ,backgroundColor:"#FFFFFF" ,opacity:0.8}}>
      <CardContent>
        <Typography  variant="h6" align="left" gutterBottom>
          You Selected Seat
        </Typography>
        <Typography
          align="left"
          variant="overline"
          display="block"
          gutterBottom
        >
          {seat.length} Seats
        </Typography>

        <Typography sx={{ mb: 1.5, textAlign: "left" }} color="text.secondary">
          Normal : {total}
        </Typography>
        <Typography sx={{ mb: 1.5, textAlign: "left" }} color="text.secondary">
          Dulex : {dulex}
        </Typography>
        <Typography sx={{ mb: 1.5, textAlign: "left" }} color="text.secondary">
          Vat : {vat}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5, textAlign: "left" }}>
          Total : {totalamount}
          <br />{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <ColorButton variant="contained">Book It Now</ColorButton>
      </CardActions>
    </Card>
  );
};

export default TotalCalculation;
