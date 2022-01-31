import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { createSvgIcon } from '@mui/material/utils';

const AvaxIcon = createSvgIcon(
    <path id="Path_101" data-name="Path 101" d="M20.621,11.06A10.06,10.06,0,1,1,10.56,1,10.06,10.06,0,0,1,20.621,11.06Zm-12.911,4H5.757a1.568,1.568,0,0,1-.736-.079A.5.5,0,0,1,4.8,14.6c-.007-.146.094-.324.3-.68l4.821-8.5c.205-.361.309-.541.44-.608a.5.5,0,0,1,.45,0c.131.067.235.247.44.608l.991,1.73.005.009a3.245,3.245,0,0,1,.383.789,1.468,1.468,0,0,1,0,.687,3.257,3.257,0,0,1-.386.8L9.7,13.91l-.007.011a3.211,3.211,0,0,1-.493.737,1.474,1.474,0,0,1-.6.349A3.532,3.532,0,0,1,7.71,15.064Zm4.931,0h2.8a1.556,1.556,0,0,0,.744-.081.5.5,0,0,0,.225-.39c.007-.141-.092-.312-.286-.647l-.02-.035-1.4-2.4-.016-.027c-.2-.333-.3-.5-.424-.566a.492.492,0,0,0-.447,0c-.129.067-.232.242-.437.6l-1.4,2.4,0,.008c-.2.353-.307.529-.3.674a.5.5,0,0,0,.225.39A1.581,1.581,0,0,0,12.64,15.064Z" transform="translate(-0.5 -1)" fill="#e84142" fill-rule="evenodd"/>,
    'Avax',
);

const MiniCollectionCard = () => {
  return (
    <Card variant="outlined">
        <Grid container direction="row" alignItems="center" sx={{paddingY:"0.5rem",paddingX:"0.8rem"}}>
            <Grid item xs={1}>
                <Typography fontWeight="bold">1</Typography>
            </Grid>
            <Grid item xs={8}>
                <Stack direction="row" spacing={1}>
                    <Avatar/>
                    <Stack direction="column">
                        <Typography variant='body2' color="text.secondary">Username</Typography>
                        <Stack direction="row" alignItems="center">
                            <AvaxIcon sx={{width:"0.875rem",height:"0.875rem"}}/>
                        <Typography variant='body2' fontWeight="bold">6.5</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="body2" color="success.light">+44.77%</Typography>
            </Grid>
        </Grid>
    </Card>
  );
};

export default MiniCollectionCard;
