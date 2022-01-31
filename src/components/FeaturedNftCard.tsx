import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const FeaturedNftCard = () => {
  return (
    <Card sx={{ maxWidth: 345, '&:hover':{boxShadow: '0px 0px 9px 1px rgba(43,43,43,0.74)'} }}>
    <CardActionArea disableRipple>
      <CardMedia
        component="img"
        height="300"
        image={require("../assets/mainCardPlaceholder.jpeg")}
        alt="NFT"
      />
      <CardContent>
        <Grid container>
            <Grid item xs={2}>
                <Avatar alt="user avatar"/>
            </Grid>
            <Grid item xs={10}>
                <Stack direction="column">
                    <Typography variant="caption">#1245</Typography>
                    <Typography color="#3737BF" variant="caption">Lost Heaven</Typography>
                </Stack>
            </Grid>

        </Grid>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};

export default FeaturedNftCard;
