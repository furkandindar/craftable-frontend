import { Grid } from '@mui/material'
import React from 'react'
import NftCard from '../../../components/NftCard'
import FilterSection from '../../MarketPlace/sections/FilterSection'

const CollectiblesTab = () => {
  return (
    <Grid container justifyContent="space-between" spacing={2}>
      <Grid item md={3}>
        <FilterSection/>
      </Grid>
      <Grid item container md={9} spacing={2}>
        <Grid item xs={4}>
        <NftCard/>
        </Grid>
        <Grid item xs={4}>
        <NftCard/>
        </Grid>
        <Grid item xs={4}>
        <NftCard/>
        </Grid>
        <Grid item xs={4}>
        <NftCard/>
        </Grid>
        <Grid item xs={4}>
        <NftCard/>
        </Grid>
        <Grid item xs={4}>
        <NftCard/>
        </Grid>
    </Grid>
    </Grid>
  )
}

export default CollectiblesTab