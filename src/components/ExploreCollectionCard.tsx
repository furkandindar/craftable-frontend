import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomImageHolder from './CustomImageHolder'
import { styled } from '@mui/material/styles';

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius:10,
    backgroundColor: "#272727",
    opacity: 0.8,
    transition: theme.transitions.create('opacity'),
  }));

const ExploreCollectionCard = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <Paper sx={{px:4,py:3, height:"100%", minHeight:"220px", position:"relative", backgroundImage:`url(../explore-card-bg-img.png)`, backgroundSize:"cover", cursor:"pointer"}} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
        <ImageBackdrop className="MuiImageBackdrop-root" />
        {hovered ?
        <Grid container height={"100%"} position="relative" justifyContent={"center"} alignItems="center">
            <Grid item>
            <Typography color="white" variant='h5'>EXPLORE</Typography>
            </Grid>
        </Grid>
        :
        <Grid container alignItems={"center"} spacing={3} justifyContent={"center"} position="relative">
        <Grid item xs={6} md={3}>
        <CustomImageHolder width={100} height={100} imgUrl="https://lh3.googleusercontent.com/9WkSu8CP7gZjaEmUy8cpaKG3mK6ScHeEDvQf8driDoRxuxy4GPAs_W_Dn_DQascQSGDkdUL4cjmsnRrL6xN-NDp-s_RNwN5pxiCo=w600" alt={"collection"}/>
        </Grid>
        <Grid item xs={12} md={9}>
            <Paper sx={{p:2, backgroundColor:"rgba(0,0,0,0.5)", color:"white"}}>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <Typography fontWeight={600}>Username</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='caption'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='caption'>6423 NFTs</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        </Grid>
        }
    </Paper>
  )
}

export default ExploreCollectionCard