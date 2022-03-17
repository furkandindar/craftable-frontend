import { Paper, Grid, Typography, LinearProgress } from '@mui/material';
import React from 'react'

const paperBox = {
    p: 4,
    '&:hover': {
        color: "#fff",
        backgroundColor: "primary.main"      
    }
}

const PollCardView = () => {

  const [progress, setProgress] = React.useState(20);
  const [hovered, setHovered] = React.useState<boolean>(false);

  return (
    <Paper sx={paperBox} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
        <Grid container direction={"column"}>
            <Grid item container>
                <Grid item xs={12} md={6} >
                    <Typography align='left'>ID: 6</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography align='right'>Multiple Execute</Typography>
                </Grid>
            </Grid>
            <Grid item container>
                <Typography variant='h6' sx={{ pt: 4 }}>Executed</Typography>
            </Grid>
            <Grid item container>
                <Typography variant='h5' sx={{ pt: 4 }}>Register Liquidation Queue Contract</Typography>
            </Grid>
            <Grid item>
                <Typography paddingLeft={9} paddingTop={4}>Pass Threshold</Typography>
                <LinearProgress sx={hovered ? { height: 6, borderRadius: 5, border:"1px solid",borderColor:"white", backgroundColor:"primary.main", "& .MuiLinearProgress-bar":{backgroundColor:"white"} } : { height: 6, borderRadius: 5, border:"1px solid",borderColor:"primary.main", backgroundColor:"white", "& .MuiLinearProgress-bar":{backgroundColor:"primary.main"} }} variant="determinate" value={progress} />
            </Grid>
            <Grid item container>
                <Grid item xs={12} md={6}>
                    <Typography align='left' sx={{ pt: 1 }}>Voted 48.73%</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography align='right' sx={{ pt: 1 }}>Yes 48% No 0%</Typography>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={12} md={6} >
                    <Typography align='left' sx={{ pt: 4 }}>Estimated end time</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography align='right' sx={{ pt: 4 }}>Wed, Nov 10, 2021 9:08:36 PM</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default PollCardView