import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import FilterSection from './sections/FilterSection';
import NftSection from './sections/NftSection';
import ProfileSection from './sections/ProfileSection';
import SortSection from './sections/SortSection';

const MarketPlace = () => {
  return (
      <Grid container direction="row" spacing={3}>
          <Grid item container direction="row" spacing={1} xs={12} md={3}>
              <Grid item xs={12}>
                <ProfileSection/>
                <FilterSection/>
              </Grid>
          </Grid>
          <Grid item container xs={12} md={9} direction="column">
              <Grid item>
                <SortSection/>
              </Grid>
              <Grid item container justifyContent="center">
                <NftSection/>
              </Grid>
          </Grid>
      </Grid>
  );
};

export default MarketPlace;
