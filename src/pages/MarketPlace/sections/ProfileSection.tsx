import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import ProfileCard from '../../../components/ProfileCard';

const ProfileSection = () => {
  return (
      <Grid container paddingBottom={3} sx={{display:{xs:"none", md:"flex"}}}>
          <Grid item xs={12}>
              <ProfileCard/>
          </Grid>
      </Grid>
  );
};

export default ProfileSection;
