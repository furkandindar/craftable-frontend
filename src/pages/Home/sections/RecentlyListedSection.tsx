import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MiniNftCard from '../../../components/MiniNftCard';
import Carousel from 'react-elastic-carousel';
import { arrayBuffer } from 'stream/consumers';

const RecentlyListedSection = () => {
  return (
      <Grid container direction="column" spacing={5}>
          <Grid item>
            <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Recently Listed</Typography>
          </Grid>
          <Grid item>
              <Carousel isRTL={false} itemsToShow={5} itemsToScroll={5}>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
                  <MiniNftCard/>
              </Carousel>
          </Grid>
      </Grid>
  );
};

export default RecentlyListedSection;
