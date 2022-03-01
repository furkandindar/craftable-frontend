import { Grid, Typography } from '@mui/material'
import React from 'react'
import ChestListingSection from './sections/ChestListingSection'
import FeaturedChestSection from './sections/FeaturedChestSection'

const Chest = () => {
  return (
    <Grid container direction={"column"}>
        <Grid item sx={{paddingBottom:8}}>
            <FeaturedChestSection/>
        </Grid>
        <Grid item>
            <ChestListingSection/>
        </Grid>
    </Grid>
  )
}

export default Chest