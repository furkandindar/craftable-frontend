import { Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import ActivityCard from '../../../components/ActivityCard'
import NftBidCard from '../../../components/NftBidCard'
import NftSaleCard from '../../../components/NftSaleCard'

const DashboardTab = () => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={4} container direction="column" spacing={2}>
            <Grid item>
                <Paper sx={{padding:3}}>
                    <Typography>My Bids on</Typography>
                </Paper>
            </Grid>
            <Grid item container direction="column" spacing={2}>
                <Grid item>
                <NftBidCard/>
                </Grid>
                <Grid item>
                <NftBidCard/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={4} container direction="column" spacing={2}>
            <Grid item>
                <Paper sx={{padding:3}}>
                    <Typography>Opened Sales on</Typography>
                </Paper>
            </Grid>
            <Grid item container direction="column" spacing={2}>
                <Grid item>
                <NftSaleCard/>
                </Grid>
                <Grid item>
                <NftSaleCard/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={4} container direction="column" spacing={2}>
            <Grid item>
                <Paper sx={{padding:3}}>
                    <Typography>Last Activity</Typography>
                </Paper>
            </Grid>
            <Grid item container direction="column" spacing={2}>
                <Grid item>
                <ActivityCard/>
                </Grid>
                <Grid item>
                <ActivityCard/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default DashboardTab