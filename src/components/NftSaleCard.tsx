import React from 'react'
import { Paper, Stack, Typography, Link, Box, Grid } from '@mui/material'

const NftSaleCard = () => {
  return (
    <Paper sx={{paddingY:1, paddingX:3}}>
        <Stack direction="row" spacing={2} alignItems="center">
            <Paper sx={{width:"65px",height:"65px"}}>
                <img width="65px" height="65px" style={{borderRadius:10}} src={require('../assets/mainCardPlaceholder.jpeg')}></img>
            </Paper>
            <Grid container>
                <Stack direction="row" width="100%" justifyContent="space-between">
                    <Typography variant="body2">#1728</Typography>
                    <Stack direction="row" spacing={1}>
                    <Typography variant="body2" fontWeight="bold">30</Typography>
                    <img src={require('../assets/avax_logo.png')} width="16px" height="16px" alt="token logo"></img>
                    </Stack>
                </Stack>
                <Typography variant="body2">username</Typography>
            </Grid>
        </Stack>
    </Paper>
  )
}

export default NftSaleCard