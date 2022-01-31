import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import React from 'react';
import artImg from "../../../assets/artImg.png";

interface CategoryCardProps {
    categoryName: string;
    imgUrl: string
}

const CategoryCard = (props: CategoryCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.imgUrl}
            />
            <CardContent sx={{padding:1.5, '&.MuiCardContent-root:last-child':{paddingBottom:1.5}}}>
                <Typography textAlign="center" fontWeight="bold" variant="subtitle1" component="div">
                {props.categoryName}
                </Typography>
            </CardContent>
        </Card>
    );
}

const BrowseSection = () => {
  return (
    <Grid container direction="column" spacing={5}>
        <Grid item>
        <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Browse by category</Typography>
        </Grid>
        <Grid item container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
            <CategoryCard categoryName='Art' imgUrl={artImg}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <CategoryCard categoryName='Collectibles' imgUrl={artImg}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <CategoryCard categoryName='Trading Cards' imgUrl={artImg}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <CategoryCard categoryName='Music' imgUrl={artImg}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <CategoryCard categoryName='Photography' imgUrl={artImg}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <CategoryCard categoryName='Sports' imgUrl={artImg}/>
            </Grid>
        </Grid>
        <Grid item container justifyContent="center">
            <Button disableRipple variant="contained">Explore More</Button>
        </Grid>
    </Grid>
  );
};

export default BrowseSection;
