import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {WalletIcon, CollectionIcon, NftIcon, SaleIcon} from '../../../assets/icons';


interface HelpItemProps{
    title: string,
    desctiption: string,
    icon: ReactNode,
}
const HelpItem = (props: HelpItemProps) => {
    return (
        <Stack direction='column' spacing={1}>
            <Grid container justifyContent="center">
                {props.icon}
            </Grid>
            <Typography gutterBottom variant='body2' fontWeight="bold" align='center'>{props.title}</Typography>
            <Typography variant="caption" align='center' sx={{color:"rgba(0,0,0,0.5)"}}>{props.desctiption}</Typography>
        </Stack>
    );
}

const HelpSection = () => {
  return (
    <Grid container direction="column" spacing={5} justifyContent="space-between">
        <Grid item xs={12}>
            <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Quick Help</Typography>
        </Grid>
        <Grid item container direction="row" spacing={3} justifyContent="center">
            <Grid item xs={12} md={3}>
            <HelpItem icon={<WalletIcon/>} title="Create your wallet" desctiption='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></HelpItem>
            </Grid>
            <Grid item xs={12} md={3}>
            <HelpItem icon={<CollectionIcon/>} title="Create your collection" desctiption='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></HelpItem>
            </Grid>
            <Grid item xs={12} md={3}>
            <HelpItem icon={<NftIcon color="primary"/>} title="Add your NFT's" desctiption='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></HelpItem>
            </Grid>
            <Grid item xs={12} md={3}>
            <HelpItem icon={<SaleIcon/>} title="List them for sale" desctiption='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></HelpItem>
        </Grid>
        </Grid>
    </Grid>
  );
};

export default HelpSection;
