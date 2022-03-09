import { Grid, Typography } from '@mui/material'
import React from 'react'
import DectListCard from '../../../components/DectListCard'

const DectListSection = () => {
  return (
    <Grid container spacing={3}>
        <Grid item container xs={12} justifyContent="center">
            <Typography variant="h6">Dect List</Typography>
        </Grid>
        <Grid item container xs={12} spacing={3} direction="column">
            <Grid item>
                <DectListCard/>
            </Grid>
            <Grid item>
                <DectListCard/>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default DectListSection