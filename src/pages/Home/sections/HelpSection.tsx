import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {WalletIcon} from '../../../assets/icons';
import Box from '@mui/material/Box';

interface HelpItemProps{
    title: string,
    desctiption: string,
}
const HelpItem = (props: HelpItemProps) => {
    return (
        <Stack direction='column' spacing={1}>
            <Grid container justifyContent="center">
                <WalletIcon sx={{width:"32px", height:"32px"}}/>
            </Grid>
            <Typography gutterBottom variant='body2' fontWeight="bold" align='center'>{props.title}</Typography>
            <Typography variant="caption" align='center' sx={{color:"rgba(0,0,0,0.5)"}}>{props.desctiption}</Typography>
        </Stack>
    );
}

const HelpSection = () => {
  return (
      <Box bgcolor="#FAFAFA">
          <Grid container direction="column" spacing={5} justifyContent="space-between">
        <Grid item xs={12}>
            <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Quick Help</Typography>
        </Grid>
        <Grid item container direction="row" spacing={3} justifyContent="center">
            <Grid item xs={12} md={3}>
            <HelpItem title="Create your wallet" desctiption='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></HelpItem>
            </Grid>
            <Grid item xs={12} md={3}>
            <HelpItem title="Create your collection" desctiption='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></HelpItem>
            </Grid>
            <Grid item xs={12} md={3}>
            <HelpItem title="Add your NFT's" desctiption='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></HelpItem>
            </Grid>
            <Grid item xs={12} md={3}>
            <HelpItem title="List them for sale" desctiption='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></HelpItem>
            </Grid>
        </Grid>
      </Grid>
      </Box>
  );
};

export default HelpSection;
