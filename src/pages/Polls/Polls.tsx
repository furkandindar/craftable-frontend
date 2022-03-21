import { LinearProgress, Link, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { CustomButtonPrimary, CustomButtonPurple } from '../../components/CustomButtons';

const Polls = () => {
    const [progress, setProgress] = React.useState(20);

    return (
        <Grid container>
            <Grid item>
            <Paper sx={{ padding: 5 }}>
                <Grid container justifyContent="space-between">
                    <Typography>
                        ID: 6
                    </Typography>
                    <Typography align={"right"}>
                        Multiple Execute
                    </Typography>
                </Grid>
                <Stack paddingTop={2} paddingBottom={2}>
                    <Typography variant={"h6"}>
                        Executed
                    </Typography>
                </Stack>
                <Grid container justifyContent="space-between">
                    <Typography variant={"h6"}>
                        Register Liquidation Queue Contract
                    </Typography>
                    <CustomButtonPrimary sx={{
                        width: 120
                        , height: 50
                    }} disableRipple>
                        Vote
                    </CustomButtonPrimary>
                </Grid>
                <Grid container paddingTop={15} spacing={4}>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Creator
                            </Typography>
                            <Typography>
                                terra1ksıdhdklslaa09a0sa0sasa7sa9s8asa
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Amount
                            </Typography>
                            <Typography>
                                1,000 ANC
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Creator
                            </Typography>
                            <Typography>
                                Wed, Nov 10, 2021 9:08:36 PM
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Link
                            </Typography>
                            <Link target="_blank" href='http://form…………………………..'><Typography>http://form…………………………..</Typography></Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Description
                            </Typography>
                            <Typography>
                                Change the liquidation contract address on Overseer…
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container paddingTop={15} spacing={4}>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Contact
                            </Typography>
                            <Typography variant={"caption"}>
                                Money Market / Overseet
                            </Typography>
                            <Link target="_blank" href='http://terra1ksıdhdklslaa09a0sa0sasa7sa9s8asa'><Typography>terra1ksıdhdklslaa09a0sa0sasa7sa9s8asa</Typography></Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Liquidation Contact
                            </Typography>
                            <Link target="_blank" href='http://terra1mdede0sfs9f7s9da0d8w07ad9das969dad6a9'><Typography>terra1mdede0sfs9f7s9da0d8w07ad9das969dad6a9</Typography></Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Contact
                            </Typography>
                            <Typography variant={"caption"}>
                                Money Market / Overseet
                            </Typography>
                            <Link target="_blank" href='http://terra1ksıdhdklslaa09a0sa0sasa7sa9s8asa'><Typography>terra1ksıdhdklslaa09a0sa0sasa7sa9s8asa</Typography></Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Liquidation Contact
                            </Typography>
                            <Link target="_blank" href='http://terra1mdede0sfs9f7s9da0d8w07ad9das969dad6a9'><Typography>terra1mdede0sfs9f7s9da0d8w07ad9das969dad6a9</Typography></Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Contact
                            </Typography>
                            <Typography variant={"caption"}>
                                Money Market / Overseet
                            </Typography>
                            <Link target="_blank" href='http://terra1ksıdhdklslaa09a0sa0sasa7sa9s8asa'><Typography>terra1ksıdhdklslaa09a0sa0sasa7sa9s8asa</Typography></Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={"h6"}>
                                Liquidation Contact
                            </Typography>
                            <Link target="_blank" href='http://terra1mdede0sfs9f7s9da0d8w07ad9das969dad6a9'><Typography>terra1mdede0sfs9f7s9da0d8w07ad9das969dad6a9</Typography></Link>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack alignItems={"center"} paddingTop={15}>
                    <CustomButtonPrimary disableRipple sx={{ width: 200, height: 50 }} >See Raw Msgs</CustomButtonPrimary>
                </Stack>
            </Paper>
            </Grid>
            <Grid item width="100%">
            <Paper sx={{ padding: 5, marginTop: 10 }}>
                <Typography variant={"h6"}>Vote Details</Typography>
                <Stack paddingTop={3}>
                    <Typography paddingLeft={9}>Pass Threshold</Typography>
                    <LinearProgress sx={{ height: 6, borderRadius: 5, border:"1px solid",borderColor:"primary.main", backgroundColor:"white", "& .MuiLinearProgress-bar":{backgroundColor:"primary.main"} }} variant="determinate" value={progress} />
                </Stack>
                <Grid container justifyContent={"center"} direction="row" spacing={3} paddingTop={5}>
                    <Grid item xs={4} justifyContent={"center"} direction="row">
                        <Paper
                            sx={{
                                padding: 10,
                                backgroundColor: "primary.main", color: "white", '& .MuiMenuItem-root': {
                                    borderBottom: "1px solid white",
                                },
                                '& .MuiMenuItem-root:last-child': {
                                    borderBottom: 'none'
                                }
                            }}>
                            <Stack spacing={2} alignItems={"center"}>
                                <Typography variant='h6'>Voted</Typography>
                                <Typography variant='h4'>48.73%</Typography>
                                <Typography>Quorum 10%</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} justifyContent={"center"} direction="row">
                        <Paper
                            sx={{
                                padding: 10,
                                backgroundColor: "primary.main", color: "white", '& .MuiMenuItem-root': {
                                    borderBottom: "1px solid white",
                                },
                                '& .MuiMenuItem-root:last-child': {
                                    borderBottom: 'none'
                                }
                            }}>
                            <Stack spacing={2} alignItems={"center"}>
                                <Typography variant='h6'>Yes</Typography>
                                <Typography variant='h4'>48.73%</Typography>
                                <Typography>31.476M ANC</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} justifyContent={"center"} direction="row">
                        <Paper
                            sx={{
                                padding: 10,
                                backgroundColor: "primary.main", color: "white", '& .MuiMenuItem-root': {
                                    borderBottom: "1px solid white",
                                },
                                '& .MuiMenuItem-root:last-child': {
                                    borderBottom: 'none'
                                }
                            }}>
                            <Stack spacing={2} alignItems={"center"}>
                                <Typography variant='h6'>No</Typography>
                                <Typography variant='h4'>0%</Typography>
                                <Typography>4.219.166391 ANC</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
        </Grid>
    );
};

export default Polls;
