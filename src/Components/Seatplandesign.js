import React from "react";
import RightInformation from "./RightInformation";
import Seatnumber from "./Seatnumber";
import Grid from "@mui/material/Unstable_Grid2";
import { CardMedia } from "@mui/material";
import UseFetch from "../Hooks/UseFetch";

const Seatplandesign = () => {
    const [data , setData] = UseFetch();
    const [seat,setseat] = React.useState([])
    const handlerchair = (id) =>{
        const seats = [...seat , id];
        setseat(seats)
    }
  return (
    <>
   
    <CardMedia
    sx={{ height: '100vh ',overflow: 'hidden'}}
    image="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    title="green iguana"
  >
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={6}>
        <Seatnumber data={data} handlerchair={handlerchair}/>
      </Grid>
      <Grid xs={6}>
        <RightInformation data={data} seat={seat}/>
      </Grid>
    </Grid>
    </CardMedia>
    </>
  );
};

export default Seatplandesign;
