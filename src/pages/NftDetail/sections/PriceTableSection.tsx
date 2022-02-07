import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const PriceTableSection = () => {
  return (
      <Grid container direction="column" spacing={5}>
          <Grid item>
              <Typography align='center' variant="h5">Price Table</Typography>
          </Grid>
          <Grid item>
          <Typography variant="h5">Price Table</Typography>
          </Grid>
      </Grid>
  );
};

export default PriceTableSection;
