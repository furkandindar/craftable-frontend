import { Grid } from '@mui/material'
import React from 'react'
import ExploreCollectionCard from '../../../components/ExploreCollectionCard'

const ExploreCollectionSection = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ExploreCollectionCard/>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExploreCollectionCard/>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExploreCollectionCard/>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExploreCollectionCard/>
        </Grid>
    </Grid>
  )
}

export default ExploreCollectionSection