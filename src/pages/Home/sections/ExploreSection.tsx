import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { ChestIcon, CraftIcon, NftIcon } from '../../../assets/icons';

const WhiteTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography,
  color: "white",
}));

const ChestCard = () => {
  return (
    <Card sx={{'&:hover':{transform: "translate3d(0px, -10px, 0px)",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}}>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          image={require("../../../assets/chestImgPlaceholder.png")}
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor:"primary.main"}}>
          <Grid container justifyContent="center" direction="column" spacing={1}>
            <Grid item xs={12} container justifyContent="center">
              <WhiteTypography variant="subtitle1" sx={{fontWeight:"bold"}}>
                CHEST
              </WhiteTypography>
            </Grid>
            <Grid item xs={12}>
              <WhiteTypography variant="body2" align='center'>
                Lorem ipsum dolir sit amet, consetetur sadipscing elitr.
              </WhiteTypography>
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
              <ChestIcon sx={{width:"50px",height:"50px"}}/>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const CraftCard = () => {
  return (
    <Card sx={{'&:hover':{transform: "translate3d(0px, -10px, 0px)",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}}>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          image={require("../../../assets/craftImgPlaceholder.png")}
          alt="craft"
        />
        <CardContent sx={{backgroundColor:"#BF3855"}}>
        <Grid container justifyContent="center" direction="column" spacing={1}>
            <Grid item xs={12} container justifyContent="center">
              <WhiteTypography variant="subtitle1" sx={{fontWeight:"bold"}}>
                CRAFT
              </WhiteTypography>
            </Grid>
            <Grid item xs={12}>
              <WhiteTypography variant="body2" align='center'>
                Lorem ipsum dolir sit amet, consetetur sadipscing elitr.
              </WhiteTypography>
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
              <CraftIcon sx={{width:"50px",height:"50px"}}/>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const NftCard = () => {
  return (
    <Card sx={{'&:hover':{transform: "translate3d(0px, -10px, 0px)",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}}>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          image={require("../../../assets/nftImgPlaceholder.png")}
          alt="NFT"
        />
        <CardContent sx={{backgroundColor:"#36858C"}}>
        <Grid container justifyContent="center" direction="column" spacing={1}>
            <Grid item xs={12} container justifyContent="center">
              <WhiteTypography variant="subtitle1" sx={{fontWeight:"bold"}}>
                NFT
              </WhiteTypography>
            </Grid>
            <Grid item xs={12}>
              <WhiteTypography variant="body2" align='center'>
                Lorem ipsum dolir sit amet, consetetur sadipscing elitr.
              </WhiteTypography>
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
              <NftIcon sx={{width:"50px",height:"50px", color:"#ffffff"}}/>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const ExploreSection = () => {
  return (
  <Grid container direction="column" spacing={5} justifyContent="space-between">
      <Grid item xs={12}>
      <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Explore</Typography>
      </Grid>
      <Grid item container direction="row" xs={12} spacing={3}>
        <Grid item xs={12} md={4}>
          <ChestCard/>
        </Grid>
        <Grid item xs={12} md={4}>
          <CraftCard/>
        </Grid>
        <Grid item xs={12} md={4}>
          <NftCard/>
        </Grid>
      </Grid>
  </Grid>
  );
};

export default ExploreSection;
