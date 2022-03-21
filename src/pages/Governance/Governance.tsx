import { Accordion, AccordionSummary, Grid, InputAdornment, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
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
import _ from 'lodash';
import StakeItemCard from '../../components/StakeItemCard';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useTheme } from '@mui/material/styles';

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

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 10,
    p: 4,
    width: '80%'
};

const Governance = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const [chooseAll, setChooseAll] = React.useState<boolean>(false);

  const onChooseAllClick = () =>{
      setChooseAll(!chooseAll);
  }

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
                                <Paper sx={{ py: 1, px:2, opacity: 0.7, boxShadow: 2, borderRadius:5 }}>
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
                                    <CustomButtonWhite onClick={handleOpen} fullWidth disableRipple>Gov Stake</CustomButtonWhite>
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

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Paper sx={style}>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item container>
                            <Grid item xs={3}>
                                <Typography variant='h4'>Stake</Typography>
                            </Grid>
                            <Grid item container xs={9} justifyContent={"space-between"}>
                                <Grid item xs={4} ml={2}>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        placeholder='Search'
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <SearchIcon />
                                            </InputAdornment>
                                        ),
                                        sx: {height:40}
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item container xs={4} alignItems={"center"}>
                                    <Grid item xs={6} pr={1}>
                                        <CustomButtonSecondary disableRipple fullWidth>Unstake</CustomButtonSecondary>
                                    </Grid>
                                    <Grid item xs={6} pl={1}>
                                        <CustomButtonPrimary onClick={onChooseAllClick} disableRipple fullWidth>
                                            {chooseAll ? "Unchoose All" : "Choose All"}
                                        </CustomButtonPrimary>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2}>
                            <Grid item xs={3}>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Alchemy Power</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography>Tier</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                                >
                                <Typography>Collection</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4a-content"
                                id="panel4a-header"
                                >
                                <Typography>Categories</Typography>
                                </AccordionSummary>
                            </Accordion>
                            </Grid>
                            <Grid item xs={9}>
                                <Paper sx={{p:1,height:"60vh", overflowY:"scroll"}}>
                                    <Grid container>
                                        
                                        {_.times(9,i => (
                                            <Grid key={i} item xs={3}>
                                                <StakeItemCard checked={chooseAll}/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent={"space-between"} alignItems={"center"}>
                            <Grid item container xs={6}>
                                <Typography>Alchemy Power: </Typography>
                                <Typography pl={1} fontWeight={600}>200</Typography>
                            </Grid>
                            <Grid item xs={1.5}>
                                <CustomButtonPrimary fullWidth>Stake</CustomButtonPrimary>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Modal>
        </>
    )
}

export default Governance;

function useStyles() {
    throw new Error('Function not implemented.');
}
