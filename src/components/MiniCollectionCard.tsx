import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AvaxIcon } from '../assets/icons';

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
