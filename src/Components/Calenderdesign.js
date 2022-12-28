import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Grid from "@mui/material/Unstable_Grid2";

import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardActions";

const Calenderdesign = () => {
  const [value, setValue] = React.useState(dayjs());

  return (
    <Card sx={{mt:2, minWidth: 270 ,backgroundColor:"#FFFFFF" ,opacity:0.8}}>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <DatePicker
                label="Select date"
                disablePast
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid xs={6}>
              <DesktopTimePicker
                label="Select time"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
};

export default Calenderdesign;
