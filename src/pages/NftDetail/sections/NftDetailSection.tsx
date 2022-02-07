import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CustomButtonPrimary, CustomButtonSecondary } from '../../../components/CustomButtons';
import { AvaxIcon } from '../../../assets/icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NftDetailSection = () => {
  return (
    <Grid container>
        <Grid item container sx={{justifyContent:{xs:"center", lg:"flex-start"}}} xs={12} lg={4.5}>
            <Box 
            component="img"
            alt="nft"
            sx={{
                maxWidth:{xs:"400px", xl:"565px"},
                maxHeight:{xs:"400px", xl:"565px"}}}
            src={require("../../../assets/mainCardPlaceholder.jpeg")}/>
        </Grid>
        <Grid item xs={12} lg={7.5} container direction="column" spacing={3}>
            <Grid item>
                <Stack sx={{marginTop:2}}>
                    <Typography gutterBottom variant='body2'>Username</Typography>
                    <Typography gutterBottom variant='h5'>Rabbit #60</Typography>
                </Stack>
            </Grid>
            <Grid item>
                <Stack direction="row" spacing={10}>
                    <Stack direction="column">
                        <Typography variant='subtitle1'>Created By</Typography>
                        <Typography variant='body2' color="secondary.light">secret....2948edsh</Typography>
                    </Stack>
                    <Stack direction="column">
                        <Typography variant='subtitle1'>Owned By</Typography>
                        <Typography variant='body2' color="secondary.light">secret....2948edsh</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item>
                <Paper sx={{padding:2}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" paddingBottom={2}>
                        <Typography>Current Price</Typography>
                        <Typography color="secondary.light" variant='body2'>Balance</Typography>
                    </Stack>
                    <Grid container justifyContent="space-between" spacing={2}>
                        <Grid item xs={12} lg={6}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                <AvaxIcon sx={{height:{xs:"20px",md:"50px", xl:"60px"},width:{xs:"20px",md:"50px", xl:"60px"}}}></AvaxIcon>
                                <Typography variant="h6">2000</Typography>
                                <Typography variant="body2">sSCRT</Typography>
                                <Typography variant="body2">($4075,5)</Typography>

                                </Stack>     
                        </Grid>
                        <Grid item container xs={12} lg={6} spacing={2} direction="row" justifyContent="center" alignItems="center">   
                                <Grid item xs={4} sm={2} md={2} lg={4}>
                                    <CustomButtonPrimary fullWidth disableRipple>Buy</CustomButtonPrimary>
                                </Grid>
                                <Grid item xs={6} sm={6} md={4} lg={6}>
                                    <CustomButtonSecondary fullWidth disableRipple>View Collection</CustomButtonSecondary>
                                </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Box marginY={2}>
                <Accordion sx={{paddingY:1}} defaultExpanded>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="description-content"
                    id="description-header"
                    >
                    <Typography>Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Box>
                <Box marginY={2}>
                <Accordion sx={{paddingY:1}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="exchange-history-content"
                    id="exchange-history-header"
                    >
                    <Typography>Exchange History</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Box>
                <Box marginY={2}>
                <Accordion sx={{paddingY:1}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="price-history-content"
                    id="price-history-header"
                    >
                    <Typography>Price History</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Box>
                <Box marginY={2}>
                <Accordion sx={{paddingY:1}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="about-content"
                    id="about-header"
                    >
                    <Typography>About Redacted Club</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Box>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default NftDetailSection;
