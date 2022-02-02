import React from 'react';
import MainSection from './sections/MainSection';
import Grid from '@mui/material/Grid';
import ExploreSection from './sections/ExploreSection';
import RecentlyListedSection from './sections/RecentlyListedSection';
import TopCollectionsSection from './sections/TopCollectionsSection';
import BrowseSection from './sections/BrowseSection';
import HelpSection from './sections/HelpSection';
import ResourcesSection from './sections/ResourcesSection';
import Box from '@mui/material/Box';

const Home = () => {
  return (
          <Grid container direction="column" spacing={10}>
          <Grid item>
              <MainSection/>
          </Grid>
          <Grid item>
              <ExploreSection/>
          </Grid>
          <Grid item>
              <RecentlyListedSection/>
          </Grid>
          <Grid item>
              <TopCollectionsSection/>
          </Grid>
          <Grid item>
              <BrowseSection/>
          </Grid>
          <Grid item>
              <HelpSection/>
          </Grid>
          <Grid item>
              <ResourcesSection/>
          </Grid>
      </Grid>
  );
};

export default Home;
