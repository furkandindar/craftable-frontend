import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const ResourcersSection = () => {
  return (
    <Grid container direction="column" spacing={5} justifyContent="space-between">
    <Grid item xs={12}>
        <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Resources for getting started</Typography>
    </Grid>
    </Grid>
  );
};

export default ResourcersSection;
