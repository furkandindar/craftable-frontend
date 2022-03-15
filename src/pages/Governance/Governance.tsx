import { Chip, Divider, Grid, LinearProgress, List, ListItem, ListItemText, makeStyles, Paper, Stack, Tabs, Typography } from '@mui/material'
import { CustomButtonPrimary, CustomButtonSecondary, CustomButtonWhite } from '../../components/CustomButtons';
import Carousel from 'react-elastic-carousel';
import ProposalItem from '../../components/ProposalItem';
import PoolCard from '../../components/PoolCard';
import PoolCardAlc from '../../components/PoolCardAlc';
import PoolCardCraft from '../../components/PoolCardCraft';
import React from 'react';

const paperStyle =
{
    width: '100%',
    padding: 4,
    backgroundColor: "primary.main", color: "white", '& .MuiMenuItem-root': {
        borderBottom: "1px solid white",
    },
    '& .MuiMenuItem-root:last-child': {
        borderBottom: 'none'
    }
}

const paperBox = {
    p: 4,
    '&:hover': {
        color: "#fff",
        backgroundColor: "primary.main"      
    }
}

const Governance = () => {
    const [progress, setProgress] = React.useState(20);

    return (
        <>
            <Grid container justifyContent={"center"} direction="row" spacing={3}>
                <Grid item xs={4} justifyContent={"center"}>
                    <Stack spacing={1} alignItems={"center"}>
                        <Paper sx={paperStyle}>
                            <Stack spacing={1} alignItems={"center"}>
                                <Typography variant='h6'>Your Alchemy Power</Typography>
                                <Typography variant='h5'>892 AP</Typography>
                            </Stack>
                        </Paper>
                        <Paper
                            sx={paperStyle}>
                            <Stack spacing={1} alignItems={"center"}>
                                <Typography variant='h6'>Your Alchemy Power</Typography>
                                <Typography variant='h5'>892 AP</Typography>
                            </Stack>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={4} justifyContent={"center"} direction="row">
                    <Paper
                        sx={paperStyle}>
                        <Stack spacing={1} alignItems={"center"}>
                            <Typography variant='h4' sx={{ marginBottom: 7 }}>NFT Stake</Typography>
                            <Chip label="490%" sx={{ margin: 0.5, opacity: 0.8, fontSize: 18, backgroundColor: "white", boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.25)' }} />
                            <Typography variant='h6'>AVAX APR</Typography>
                            <CustomButtonWhite sx={{ width: 180 }}>Gov Stake</CustomButtonWhite>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={4} justifyContent={"center"} direction="row">
                    <Paper
                        sx={paperStyle}>
                        <Stack spacing={1} alignItems={"center"}>
                            <Typography variant='h6'>Active Proposal #17</Typography>
                            <Carousel isRTL={false} itemsToShow={1} itemsToScroll={1}>
                                <ProposalItem />
                                <ProposalItem />
                                <ProposalItem />
                                <ProposalItem />
                                <ProposalItem />
                                <ProposalItem />
                            </Carousel>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container direction="row" spacing={2} paddingTop={6}>
                <Grid item xs={12} >
                    <PoolCardAlc />
                </Grid>
                <Grid item xs={12} >
                    <PoolCardCraft />
                </Grid>
            </Grid>

            <Grid container direction="row" spacing={2} paddingTop={6}>
                <Grid item xs={12} md={8} >
                    <Typography variant='h4'>Pools</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <CustomButtonSecondary disableRipple fullWidth>Join Forum</CustomButtonSecondary>
                </Grid>
                <Grid item xs={12} md={2}>
                    <CustomButtonPrimary disableRipple fullWidth>Create Poll</CustomButtonPrimary>
                </Grid>
            </Grid>


            <Grid container direction="row" spacing={2} paddingTop={6}>
                <Grid item xs={12} md={6}>
                    <Paper sx={paperBox}>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12} md={9} >
                                <Typography>ID:6</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography>Multiple Execute</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant='h6' sx={{ pt: 4 }}>Executed</Typography>
                        <Typography variant='h4' sx={{ pt: 4 }}>Register Liquidation Queue Contract</Typography>
                        <Typography paddingLeft={9} paddingTop={6}>Pass Threshold</Typography>
                        <LinearProgress sx={{ height: 6, borderRadius: 5 }} variant="determinate" value={progress} />
                        <Grid container direction="row">
                            <Grid item xs={12} md={10} >
                                <Typography sx={{ pt: 4 }}>Voted 48.73%</Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{ justifyContent: 'right' }}>
                                <Typography sx={{ pt: 4 }}>Yes 48% No 0%</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item xs={12} md={8} >
                                <Typography sx={{ pt: 4 }}>Estimated end time</Typography>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ justifyContent: 'right' }} >
                                <Typography sx={{ pt: 4 }}>Wed, Nov 10, 2021 9:08:36 PM</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Governance;

function useStyles() {
    throw new Error('Function not implemented.');
}
