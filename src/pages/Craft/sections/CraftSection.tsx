import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Modal, Paper, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CustomButtonGradient, CustomButtonPrimary } from '../../../components/CustomButtons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 10,
    p: 4,
    width: '80%'
  };

const CraftSection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Grid container spacing={3}>
        <Grid item xs={12} container justifyContent={"space-between"}>
            <Grid item xs={12} md={3.5}>
                <Paper sx={{background:"#e6e6e6",height:"375px",cursor:"pointer"}} onClick={handleOpen}>
                    <Grid container height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <AddIcon sx={{fontSize:100, color:"#b4b4b4"}}/>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} md={0.5} container justifyContent={"center"} alignItems={"center"}>
                <AddIcon/>
            </Grid>
            <Grid item xs={12} md={3.5}>
                <Paper sx={{background:"#e6e6e6",height:"375px",cursor:"pointer"}} onClick={handleOpen}>
                    <Grid container height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <AddIcon sx={{fontSize:100, color:"#b4b4b4"}}/>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item container justifyContent={"center"} alignItems={"center"} xs={12} md={0.5}>
                <ArrowForwardIosIcon/>
            </Grid>
            <Grid item xs={12} md={3.5}>
                <Paper sx={{background:"#e6e6e6",height:"375px"}}>
                    <Grid container height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent={"center"}>
            <Grid item container xs={1.5}>
                <CustomButtonGradient fullWidth>Craft</CustomButtonGradient>
            </Grid>
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
                    <Typography variant='h5'>Choosing</Typography>
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
                        <Paper>
                            <Grid container direction="column">
                                <Grid item container>
                                    <Typography>img</Typography>
                                    <Typography>Earth</Typography>
                                    <Typography>1</Typography>
                                    <Typography>none</Typography>
                                </Grid>
                                <Divider/>
                                <Grid item container>
                                    <Typography>img</Typography>
                                    <Typography>Earth</Typography>
                                    <Typography>1</Typography>
                                    <Typography>none</Typography>
                                </Grid>
                                <Divider/>
                                <Grid item container>
                                    <Typography>img</Typography>
                                    <Typography>Earth</Typography>
                                    <Typography>1</Typography>
                                    <Typography>none</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container justifyContent={"flex-end"}>
                    <Grid item xs={2}>
                        <CustomButtonPrimary fullWidth>Choose</CustomButtonPrimary>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Modal>
    </>
  )
}

export default CraftSection