import { Grid, Paper, Typography, Box } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary } from '../../components/CustomButtons'
import CustomTextField from '../../components/CustomTextField'

const ChestDetail = () => {
  return (
    <Grid container direction={"column"} spacing={0}>
        <Grid item container spacing={3} sx={{paddingBottom:5}}>
            <Grid item xs={12} md={5}>
            <Box 
            component="img"
            alt="nft"
            sx={{
                
                maxWidth:{xs:"300px", md:"450px", xl:"565px"},
                maxHeight:{xs:"300px", md:"450px", xl:"565px"}}}
            src={require("../../assets/chest-detail-img.png")}/>
            </Grid>
            <Grid item xs={12} md={7} container spacing={4} direction={"column"}>
                <Grid item>
                <Typography variant='h6'>Chest #1</Typography>
                <Typography variant="body2">Chest Name</Typography>
                </Grid>
                <Grid item>
                <Typography variant='h6'>Total Amount</Typography>
                <Typography variant="body2">10,324/30,000</Typography>
                </Grid>
                <Grid item>
                <Typography variant='h6'>Price</Typography>
                <Typography variant="body2">100 Craft</Typography>
                </Grid>
                <Grid item>
                <Typography variant='h6'>Created By</Typography>
                <Typography variant="body2">0xea....</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Paper>
                <Grid container paddingX={6} paddingY={3} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={1.5} justifyContent={"center"}>
                        <Typography noWrap>Chest #2</Typography>
                    </Grid>
                    <Grid item container xs={8}>
                        <CustomTextField type={"number"} placeholder={"0.00"}></CustomTextField>
                    </Grid>
                    <Grid item container xs={1.5} justifyContent={"center"}>
                        <CustomButtonPrimary fullWidth>Buy</CustomButtonPrimary>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default ChestDetail