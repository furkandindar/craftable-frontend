import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { CustomButtonSecondary } from '../../../components/CustomButtons'
import CustomTextField from '../../../components/CustomTextField'

const SearchSection = () => {
  return (
    <Paper sx={{backgroundColor:"primary.main", color:"white",p:3}}>
        <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={6} md={6}>
                <CustomTextField fullWidth placeholder='Search' InputProps={{sx:{backgroundColor:"primary.contrastText", borderRadius:50}}}></CustomTextField>
            </Grid>
            <Grid item xs={2.5} md={1.25}>
                <CustomButtonSecondary fullWidth sx={{height:"40px"}}>Search</CustomButtonSecondary>
            </Grid>
            <Grid item xs={3.5} md={4.75}>
                <Typography align='right'>124 Results</Typography>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default SearchSection