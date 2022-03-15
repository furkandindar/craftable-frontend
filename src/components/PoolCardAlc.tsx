import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary, CustomButtonSecondary } from './CustomButtons'

const PoolCardAlc = () => {
    return (
        <Paper sx={{ p: 4 }}>
            <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={12} md={2} container direction={"column"} sx={{ justifyContent: { xs: "center" } }}>
                    <Grid item>
                        <Typography fontWeight={600}>Pool</Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontWeight={600}>Alchemy Power</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={8} justifyContent={"center"}>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Total Deposit</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>45000 AP</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Staked</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>600 AP</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Stakable</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>150 AP</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Apr</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>490%</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Reward</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>AVAX</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2}>
                        <Grid item>
                            <Typography>Weekly Dist.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>610 AVAX</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={2} container spacing={1} sx={{ justifyContent: { xs: "right" } }}>
                    <Grid item xs={4} md={6}>
                        <CustomButtonPrimary disableRipple fullWidth>Claim</CustomButtonPrimary>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PoolCardAlc;