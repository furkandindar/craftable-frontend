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
          <Grid container spacing={10}>
          <Grid item xs={12}>
              <MainSection/>
          </Grid>
          <Grid item xs={12}>
              <ExploreSection/>
          </Grid>
          <Grid item xs={12}>
              <RecentlyListedSection/>
          </Grid>
          <Grid item xs={12}>
              <TopCollectionsSection/>
          </Grid>
          <Grid item xs={12}>
              <BrowseSection/>
          </Grid>
          <Grid item xs={12}>
              <HelpSection/>
          </Grid>
          <Grid item xs={12}>
              <ResourcesSection/>
          </Grid>
      </Grid>
  );
};

export default Home;
