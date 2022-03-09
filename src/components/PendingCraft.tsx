import { Grid } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary } from './CustomButtons'

const PendingCraft = () => {
  return (
    <Grid container direction="column">
        <Grid item>
            <img width={"100%"} src={require("../assets/pending-craft.png")}/>
        </Grid>
        <Grid item container justifyContent={"center"}>
            <Grid item xs={3}>
                <CustomButtonPrimary fullWidth>Claim</CustomButtonPrimary>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default PendingCraft