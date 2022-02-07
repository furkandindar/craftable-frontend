import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import React from 'react';
import CustomButton from './CustomButton';
import { CustomButtonPurple, CustomButtonWhite } from './CustomButtons';

const ProfileCard = () => {
  return (
      <Paper sx={{backgroundColor: "primary.main"}}>
              <img width="100%" src={require('../assets/profile_pic.png')}/>
              <Grid container justifyContent="center">
                <img width="45%" style={{borderRadius:"50%", border:"10px solid white", marginTop:"-25%"}} src={require('../assets/profile_pic.png')}/>
              </Grid>
              <Stack direction="column" justifyContent="center" spacing={2} paddingTop={3}>
                    <Typography color="white" align='center'>0xeaC9..99F4</Typography>
                  <Grid container justifyContent="center">
                      <Grid item xs={6}>
                          <CustomButtonWhite disableRipple fullWidth size='large'>My Wallet</CustomButtonWhite>
                      </Grid>
                  </Grid>
                  <Grid container justifyContent="center" paddingBottom={3}>
                      <Grid item xs={5}>
                      <CustomButtonPurple disableRipple size='large' fullWidth>Create</CustomButtonPurple>
                      </Grid>
                  </Grid>
              </Stack>
      </Paper>
  );
};

export default ProfileCard;

