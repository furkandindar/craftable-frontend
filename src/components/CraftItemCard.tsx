import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const CraftItemCard = () => {
  return (
    <Paper elevation={0} square sx={{borderBottom:"1px solid gray",py:1,px:0.5}}>
        <Grid container alignItems={"center"}>
            <Grid item mr={2}>
                <img width={"70px"} style={{borderRadius:"10px"}} src={require("../assets/pending-craft.png")}/>
            </Grid>
            <Grid item mr={1}>
                <Typography variant='h6'>Earth,</Typography>
            </Grid>
            <Grid item mr={1}>
                <Typography variant='h6'>1,</Typography>
            </Grid>
            <Grid item mr={1}>
                <Typography variant='h6'>None</Typography>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default CraftItemCard