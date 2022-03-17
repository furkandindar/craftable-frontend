import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary, CustomButtonSecondary } from './CustomButtons'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';

const EarnCard = () => {
  return (
    <Paper sx={{p:2}}>
        <Grid container spacing={1} alignItems={"center"}>
            <Grid item xs={12} md={0.75} container sx={{justifyContent:{xs:"center"}}}>
                <Box sx={{width:50,height:50,borderRadius:"50%",background:"gray"}}>
                    {/* image here */}
                </Box>
            </Grid>
            <Grid item xs={12} md={1.5} container direction={"column"} sx={{justifyContent:{xs:"center"}}}>
                <Grid item>
                    <Typography fontWeight={600}>Usdt.e</Typography>
                </Grid>
                <Grid item>
                    <Typography fontSize={"10px"}>Usdt.e</Typography>
                </Grid>
                <Grid item container alignItems={"center"}>
                    <Grid item>
                        <Typography variant="body2">Reward</Typography>
                    </Grid>
                    <Grid item>
                        <img src={require("../assets/talecraft-logo.png")} alt="reward token"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={7.25} justifyContent={"center"}>
                <Grid item container direction={"column"} xs={6} md={3}>
                    <Grid item>
                        <Typography>Pool Deposits</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>$207.4M</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction={"column"} xs={6} md={3}>
                    <Grid item>
                        <Typography>My Deposits</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>$0.0</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction={"column"} xs={6} md={3}>
                    <Grid item container alignItems={"center"}>
                        <Typography pr={0.5}>Base APR</Typography>
                        <Tooltip title="Each staked Craft mint AP/day " placement='top' arrow>
                            <InfoOutlinedIcon sx={{fontSize:"16px"}}/>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>13%</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction={"column"} xs={6} md={3}>
                    <Grid item>
                        <Typography>Avg. Boosted APR</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>247%</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={2.5} container spacing={1} sx={{justifyContent:{xs:"center"}}}>
                <Grid item xs={4} md={6}>
                    <CustomButtonPrimary disableRipple fullWidth>Deposit</CustomButtonPrimary>
                </Grid>
                <Grid item xs={4} md={6}>
                    <CustomButtonSecondary disableRipple fullWidth>Withdraw</CustomButtonSecondary>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default EarnCard