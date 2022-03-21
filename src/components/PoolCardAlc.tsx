import { Grid, Paper, Typography } from '@mui/material'
import { CustomButtonGradient, CustomButtonPrimary } from './CustomButtons'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';

const PoolCardAlc = () => {
    return (
        <Paper sx={{p:3.5}}>
            <Grid container spacing={1} alignItems={"center"}>
                <Grid item xs={12} md={2} spacing={1} container direction={"column"} sx={{justifyContent:{xs:"center"}}}>
                    <Grid item>
                        <Typography>Pool</Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontWeight={600}>Alchemy Power</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={9} justifyContent={"center"}>
                    <Grid item container direction={"column"} xs={6} md={2} spacing={1}>
                        <Grid item>
                            <Typography align='center'>Total Deposits</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align='center' fontWeight={600}>45000 AP</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2} spacing={1}>
                        <Grid item>
                            <Typography align='center'>Staked</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align='center' fontWeight={600}>600 AP</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2} spacing={1}>
                        <Grid item>
                            <Typography align='center'>Stakable</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align='center' fontWeight={600}>150 AP</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2} spacing={1}>
                        <Grid item container justifyContent={"center"} alignItems={"center"}>
                            <Typography pr={0.5} align='center'>APR</Typography>
                            <Tooltip title="Annual Percantage Rate" placement='top' arrow>
                                <InfoOutlinedIcon sx={{fontSize:"16px"}}/>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Typography align='center' fontWeight={600}>490%</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2} spacing={1}>
                        <Grid item>
                            <Typography align='center'>Reward</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align='center' fontWeight={600}>AVAX</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} xs={6} md={2} spacing={1}>
                        <Grid item container justifyContent={"center"} alignItems={"center"}>
                            <Typography pr={0.5} align='center'>Weekly Dist.</Typography>
                            <Tooltip title="Sum of weekly AVAX rewards" placement='top' arrow>
                                <InfoOutlinedIcon sx={{fontSize:"16px"}}/>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Typography align='center' fontWeight={600}>610 AVAX</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={1} container spacing={1} sx={{justifyContent:{xs:"center"}}}>
                    <Grid item xs={6} md={12}>
                        <CustomButtonGradient disableRipple fullWidth>Claim</CustomButtonGradient>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PoolCardAlc;