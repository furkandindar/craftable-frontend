import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import NftCard from '../../../components/NftCard';
import _ from "lodash";

const NftSection = () => {
  return (
      <Grid container spacing={3}>
          {_.times(9,i => (
             <Grid key={i} item xs={12} md={6} lg={4} container justifyContent="center">
                <NftCard/>
            </Grid> 
          ))}
      </Grid>
  );
};

export default NftSection;
