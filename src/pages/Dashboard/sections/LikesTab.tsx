import Grid from '@mui/material/Grid'
import React from 'react'
import NftCard from '../../../components/NftCard'

const LikesTab = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={3}>
        <NftCard/>
        </Grid>
        <Grid item xs={3}>
        <NftCard/>
        </Grid>
        <Grid item xs={3}>
        <NftCard/>
        </Grid>
        <Grid item xs={3}>
        <NftCard/>
        </Grid>
        <Grid item xs={3}>
        <NftCard/>
        </Grid>
        <Grid item xs={3}>
        <NftCard/>
        </Grid>
    </Grid>
  )
}

export default LikesTab