import { Grid, Typography } from '@mui/material'
import React from 'react'
import CategorySection from './sections/CategorySection'
import ExploreCollectionSection from './sections/ExploreCollectionSection'
import SearchSection from './sections/SearchSection'

const Explore = () => {
  return (
    <Grid container direction={"column"} spacing={3}>
        <Grid item>
            <CategorySection/>
        </Grid>
        <Grid item>
            <SearchSection/>
        </Grid>
        <Grid item>
            <ExploreCollectionSection/>
        </Grid>
    </Grid>
  )
}

export default Explore