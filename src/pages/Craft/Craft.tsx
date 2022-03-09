import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import CraftSection from './sections/CraftSection'
import DectListSection from './sections/DectListSection'
import PendingCraftSection from './sections/PendingCraftSection'

const Craft = () => {
  return (
    <Grid container direction="column" spacing={5}>
        <Grid item>
            <CraftSection/>
        </Grid>
        <Grid item>
            <PendingCraftSection/>
        </Grid>
        <Grid item>
            <DectListSection/>
        </Grid>
    </Grid>
  )
}

export default Craft