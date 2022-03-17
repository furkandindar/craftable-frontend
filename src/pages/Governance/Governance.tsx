import { Grid, Paper, Stack, Typography } from '@mui/material'
import { CustomButtonPrimary, CustomButtonSecondary, CustomButtonWhite } from '../../components/CustomButtons';
import ProposalItem from '../../components/ProposalItem';
import PoolCardAlc from '../../components/PoolCardAlc';
import PoolCardCraft from '../../components/PoolCardCraft';
import PollCardView from '../../components/PollCardView';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const paperStyle =
{
    width: '100%',
    height:"100%",
    padding: 3,
    backgroundColor: "primary.main",
    color: "white",
}

const darkPaperStyle =
{
    width: '100%',
    height:"100%",
    padding: 3,
    backgroundColor: "primary.dark",
    color: "white"
}

const Governance = () => {

    return (
        <>
            <Grid container justifyContent={"center"} direction="row" spacing={3}>
                <Grid item xs={12} md={4} justifyContent={"center"}>
                    <Stack spacing={1} alignItems={"center"} height={"100%"}>
                        <Paper sx={paperStyle}>
                            <Stack alignItems={"center"}>
                                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                    <Typography variant='h6'>Your Alchemy Power</Typography>
                                    <Tooltip title="The DAO Power on Talecraft. Value depends on your total NFT staked and Craft staked." placement='top' arrow>
                                        <InfoOutlinedIcon fontSize='small'/>
                                    </Tooltip>
                                </Stack>
                                <Typography variant='h5'>892 AP</Typography>
                            </Stack>
                        </Paper>
                        <Paper
                            sx={darkPaperStyle}>
                            <Stack alignItems={"center"}>
                                <Typography variant='h6'>Last Activities</Typography>
                            </Stack>
                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} justifyContent={"center"} direction="row">
                    <Paper sx={paperStyle}>
                        <Grid container justifyContent={"center"} direction={"column"} spacing={1} alignItems={"center"}>
                            <Grid item pb={3}>
                                <Typography variant='h4'>NFT Stake</Typography>
                            </Grid>
                            <Grid item>
                                <Paper sx={{ py: 1, px:2, opacity: 0.7, backgroundColor: "white", boxShadow: 2, borderRadius:5 }}>
                                    <Typography>490%</Typography>
                                </Paper>
                            </Grid>
                            <Grid item container justifyContent={"center"} alignItems={"center"}>
                                    <Typography pr={1} variant='h6'>AVAX</Typography>
                                    <Typography pr={1} variant='h6'>APR</Typography>
                                    <Tooltip title="Exact AVAX APR you are currently earning. Value depends on your AP balance" placement='top' arrow>
                                        <InfoOutlinedIcon fontSize='small'/>
                                    </Tooltip>
                            </Grid>
                            <Grid item container justifyContent={"center"}>
                                <Grid item xs={8}>
                                    <CustomButtonWhite fullWidth disableRipple>Gov Stake</CustomButtonWhite>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} justifyContent={"center"} direction="row">
                    <Paper sx={paperStyle}>
                        <Swiper navigation={true} modules={[Navigation]}>
                            <SwiperSlide>
                                <ProposalItem/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProposalItem/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProposalItem/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProposalItem/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProposalItem/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProposalItem/>
                            </SwiperSlide>
                        </Swiper>
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

            <Grid container direction="row" alignItems={"center"} spacing={2} paddingTop={6}>
                <Grid item xs={12} md={8} >
                    <Typography variant='h4'>Polls</Typography>
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
                    <PollCardView/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PollCardView/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PollCardView/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PollCardView/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PollCardView/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PollCardView/>
                </Grid>
            </Grid>
        </>
    )
}

export default Governance;

function useStyles() {
    throw new Error('Function not implemented.');
}
