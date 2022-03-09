import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary } from '../../../components/CustomButtons'
import PendingCraft from '../../../components/PendingCraft'

const PendingCraftSection = () => {
  return (
    <Grid container spacing={3}>
        <Grid item container xs={12} justifyContent="center">
            <Typography variant="h6">Pending Craft</Typography>
        </Grid>
        <Grid item container xs={12} justifyContent="space-between" spacing={5}>
            <Grid item container xs={12} md={4}>
               <PendingCraft/>
            </Grid>
            <Grid item container xs={12} md={4}>
               <PendingCraft/>
            </Grid>
            <Grid item container xs={12} md={4}>
                <PendingCraft/>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default PendingCraftSection