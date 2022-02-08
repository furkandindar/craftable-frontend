import { Box, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import CustomSortButton, { SortType } from '../../../components/CustomSortButton';

const sortItems: SortType[] = [
    {label:"Lowest Ask: Low to High", value:1},
]

const PriceTableSection = () => {
    const handleOnSortChange = (value:any) => {
        console.log(value);
    };
  return (
      <Grid container direction="column" spacing={5}>
          <Grid item>
              <Typography align='center' variant="h5">Price Table</Typography>
          </Grid>
          <Grid item>
              <Paper>
                  <Box paddingTop={3} paddingX={3} paddingBottom={1}>
                      <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item>
                            <Stack direction="row" spacing={1}>
                                <Typography fontWeight="bold">682</Typography>
                                <Typography>Available</Typography>
                            </Stack>
                          </Grid>
                          <Grid item>
                            <CustomSortButton onChange={handleOnSortChange}  sortItems={sortItems}></CustomSortButton>
                          </Grid>
                      </Grid>
                      <Grid paddingTop={3} paddingX={5} container justifyContent="space-between" alignItems="center">
                          <Grid item>
                          <Typography>Price</Typography>
                          </Grid>
                          <Grid item>
                          <Typography>Serial</Typography>
                          </Grid>
                          <Grid item>
                          <Typography>Seller</Typography>
                          </Grid>
                      </Grid>
                  </Box>
              </Paper>
          </Grid>
      </Grid>
  );
};

export default PriceTableSection;
