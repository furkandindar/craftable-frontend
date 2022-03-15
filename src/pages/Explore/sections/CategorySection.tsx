import { Grid, Paper, Typography, Button } from '@mui/material';
import React from 'react'

const categories = ['Trends', 'Popular', 'Art', 'Games', 'Music', 'Memes'];

interface CategoryCardProps{
    category: string;
}

const CategoryCard = (props: CategoryCardProps) => {
    return (
        <Button fullWidth disableRipple sx={{backgroundColor:"primary.main",p:1, '&:hover':{backgroundColor:"primary.dark"}}}>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography color="white">{props.category}</Typography>
                </Grid>
            </Grid>
        </Button>
    )
}

const CategorySection = () => {
  return (
    <Grid container spacing={2}>
        {categories.map((category) => (
            <Grid item xs={2} key={category}>
                <CategoryCard category={category}/>
            </Grid>
        ))}
    </Grid>
  )
}

export default CategorySection