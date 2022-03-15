import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary, CustomButtonSecondary } from './CustomButtons'

const PoolCardCraft = () => {
    return (
        <Paper sx={{ p: 4 }}>
            <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={12} md={1} container direction={"column"} sx={{ justifyContent: { xs: "center" } }}>
                    <Grid item>
                        <Typography fontWeight={600}>Pool</Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontWeight={600}>Craft</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={10} justifyContent={"center"}>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Total Deposit</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>2,345,100 Craft</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Staked</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>9,345 Craft</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Stakable</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>562 Craft</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>AP Mint Rate </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>12 AP/day</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Reward</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>Alchemy Power</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={1} container direction={"column"} spacing={1} sx={{ justifyContent: { xs: "right" } }}>
                    <Grid item xs={4} md={6}>
                        <CustomButtonPrimary disableRipple fullWidth>Claim</CustomButtonPrimary>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <CustomButtonSecondary disableRipple fullWidth>Unstake</CustomButtonSecondary>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PoolCardCraft;