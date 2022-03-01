import { Grid, Typography } from '@mui/material'
import React from 'react'
import ChestListCard from '../../../components/ChestListCard'

const ChestListingSection = () => {
  return (
    <Grid container spacing={3}>
        <Grid item container xs={12} justifyContent="center">
            <Typography variant='h6'>Chest Listing</Typography>
        </Grid>
        <Grid item xs={12} container spacing={2} direction="column">
            <Grid item>
                <ChestListCard/>
            </Grid>
            <Grid item>
                <ChestListCard/>
            </Grid>
            <Grid item>
                <ChestListCard/>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default ChestListingSection