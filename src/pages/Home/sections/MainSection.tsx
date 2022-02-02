import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import React from 'react';
import Link from '@mui/material/Link';
import FeaturedNftCard from '../../../components/FeaturedNftCard';

const MainSection = () => {
  return (
      <Grid container direction="row" spacing={2} alignItems="center">
          <Grid item xs={12} md={7}>
              <Stack direction="column" spacing={3}>
                <Box>
                    <Typography variant='h4' color="text.secondary" sx={{fontWeight:"bold"}}>Lorem Ipsum is simply</Typography>
                    <Typography gutterBottom variant='h4' color="text.secondary">dummy text of the</Typography>
                    <Typography>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
                </Box>
                <Link color="text.secondary" sx={{fontFamily:"Poppins"}} variant="body2">Learn more about</Link>
              </Stack>
          </Grid>
          <Grid item xs={12} md={5} container justifyContent="flex-end">
              <Grid item>
                <FeaturedNftCard/>
              </Grid>
          </Grid>
      </Grid>
  );
};

export default MainSection;
