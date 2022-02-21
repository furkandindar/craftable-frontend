import React from 'react'
import { Paper, Stack, Typography, Link, Box, Grid } from '@mui/material'

const NftBidCard = () => {
  return (
    <Paper sx={{paddingY:1, paddingX:3}}>
        <Stack direction="row" spacing={2} alignItems="center">
            <Paper sx={{width:"65px",height:"65px"}}>
                <img width="65px" height="65px" style={{borderRadius:10}} src={require('../assets/mainCardPlaceholder.jpeg')}></img>
            </Paper>
            <Grid container>
                <Grid item xs={5} container alignItems="center">
                <Typography variant="body2">#1728</Typography>
                <Typography variant="body2">username</Typography>
                </Grid>
                <Grid item xs={3.5} container justifyContent="center" alignItems="center">
                        <Stack justifyContent="center" alignItems="center">
                            <Stack direction="row" spacing={1}>
                            <Typography variant="body2" fontWeight="bold">3.5</Typography>
                            <img src={require('../assets/avax_logo.png')} width="16px" height="16px" alt="token logo"></img>
                            </Stack>
                            <Typography align='center' variant="caption">Auction Ended</Typography>
                        </Stack>
                </Grid>
                <Grid item xs={3.5} container justifyContent="center" alignItems="center">
                        <Stack justifyContent="center" alignItems="center">
                            <Stack direction="row" spacing={1}>
                            <Typography variant="body2" fontWeight="bold">3.5</Typography>
                            <img src={require('../assets/avax_logo.png')} width="16px" height="16px" alt="token logo"></img>
                            </Stack>
                            <Typography align='center' variant="caption">My Last Bid</Typography>
                        </Stack>
                </Grid>
            </Grid>
        </Stack>
    </Paper>
  )
}

export default NftBidCard