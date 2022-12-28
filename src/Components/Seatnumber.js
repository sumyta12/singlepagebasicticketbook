import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import ChairTwoToneIcon from '@mui/icons-material/ChairTwoTone';

const Seatnumber = ({ data ,  handlerchair }) => {
 
  return (
    
    <Container maxWidth="sm" sx={{mt : 6}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            data.map(datas =>  
                <Grid xs={2} sm={4} md={4} key={datas._id}>
          
                 <ChairTwoToneIcon   sx={{color:"white",fontSize: 50}} onClick={() => handlerchair(datas)}/>  
                 </Grid>)
        }
     
      </Grid>
    </Box>
    </Container>
  );
};

export default Seatnumber;
