import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import NftDetailSection from './sections/NftDetailSection';
import PriceTableSection from './sections/PriceTableSection';

const NftDetail = () => {
  return (
    <Grid container>
    <Grid item xs={12}>
        <NftDetailSection></NftDetailSection>
    </Grid>
    <Grid item xs={12}>
        <PriceTableSection></PriceTableSection>
    </Grid>
    </Grid>
  );
};

export default NftDetail;
