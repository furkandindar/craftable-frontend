import { Paper, Stack, Typography, Link } from '@mui/material'
import React from 'react'

const ActivityCard = () => {
  return (
    <Paper sx={{padding:2}}>
        <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">NFT purchased</Typography>
                <Stack direction="row" spacing={1}>
                <Typography variant="body2" fontWeight="bold">9.86</Typography>
                <img src={require('../assets/avax_logo.png')} width="16px" height="16px" alt="token logo"></img>
                </Stack>
            </Stack>
            <Link variant="body2">Sale details</Link>
        </Stack>
    </Paper>
  )
}

export default ActivityCard