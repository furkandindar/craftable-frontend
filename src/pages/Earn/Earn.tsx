import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary } from '../../components/CustomButtons'
import EarnCard from '../../components/EarnCard'

const Earn = () => {
  return (
    <Grid container direction={"column"} spacing={2}>
        <Grid item container spacing={3}>
            <Grid item xs={12} md={4}>
                <Paper sx={{paddingX:2, paddingY:1.5}}>
                    <Grid container direction={"column"} spacing={0.5}>
                        <Grid item>
                            <Typography>Claimable Rewards</Typography>
                        </Grid>
                        <Grid item container justifyContent={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <Typography variant='h6'>34.6 Craft</Typography>
                            </Grid>
                            <Grid item>
                                <CustomButtonPrimary disableRipple>Claim</CustomButtonPrimary>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper sx={{paddingX:2, paddingY:1.5}}>
                    <Grid container direction={"column"} spacing={0.5}>
                        <Grid item>
                            <Typography>My Alchemy Power</Typography>
                        </Grid>
                        <Grid item container justifyContent={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <Typography variant='h6'>600</Typography>
                            </Grid>
                            <Grid item>
                                <CustomButtonPrimary disableRipple>Stake</CustomButtonPrimary>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper sx={{paddingX:2, paddingY:1.5}}>
                    <Grid container direction={"column"} spacing={0.5}>
                        <Grid item>
                            <Typography>My Boosted APR</Typography>
                        </Grid>
                        <Grid item container justifyContent={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <Typography variant='h6'>327%</Typography>
                            </Grid>
                            <Grid item>
                                <CustomButtonPrimary disableRipple>Calc</CustomButtonPrimary>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        <Grid item>
            <EarnCard/>
        </Grid>
        <Grid item>
            <EarnCard/>
        </Grid>
        <Grid item>
            <EarnCard/>
        </Grid>
        <Grid item>
            <EarnCard/>
        </Grid>
        <Grid item container spacing={2}>
            <Grid item xs={12} md={4}>
                <Paper sx={{p:2}}>
                    <Grid container direction={"column"} spacing={3}>
                        <Grid item container direction={"column"}>
                            <Grid item>
                                <Typography>Total Value Locked</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h6'>$46,090,056</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction={"column"}>
                            <Grid item>
                                <Typography>Yield Reserve</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h6'>156,000 Craft</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper sx={{p:2}}>
                    <Grid container direction={"column"} spacing={3}>
                        <Grid item container justifyContent={"center"}>
                            <Grid item container xs={12} md={6} sx={{justifyContent:{xs:"center",md:"flex-start"}}}>
                                <Grid item>
                                    <Grid item>
                                        <Typography>Craft Price</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h6'>$5.05</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={5} xs={12} md={6} sx={{justifyContent:{xs:"center",md:"flex-end"}}}>
                                <Grid item>
                                    <Grid item>
                                        <Typography>Circulating Supply</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography fontWeight={600}>2,400,000 Craft</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid item>
                                        <Typography>Market Cap</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography fontWeight={600}>$11,000,000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Paper>
                                {/* chart here */}
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Earn