import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { styled } from '@mui/material/styles';
import { InputProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import CustomTextField from '../../../components/CustomTextField';

// const CustomTextField = styled(TextField)(({theme}) => ({
//   '& fieldset':{
//     borderRadius:25,
//   },
// })
// );

const ResourcesSection = () => {
  return (
    <Grid container direction="column" spacing={5} justifyContent="space-between">
    <Grid item xs={12}>
        <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Resources for getting started</Typography>
    </Grid>
    <Grid item xs={12}>
        <CustomTextField type="text"></CustomTextField>
    </Grid>
    </Grid>
  );
};

export default ResourcesSection;
