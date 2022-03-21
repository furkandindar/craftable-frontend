import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { CustomButtonPrimary } from '../../../components/CustomButtons';
import MiniCollectionCard from '../../../components/MiniCollectionCard';
const TopCollectionsSection = () => {
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    }
  return (
    <Grid container direction="column" spacing={5}>
        <Grid item>
        <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Top Collections</Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="center" spacing={3}>
            {expand ? <>
                <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            </> : <>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MiniCollectionCard/>
            </Grid>
            </>}
        </Grid>
        <Grid item container justifyContent="center">
            <Grid item xs={2}>
                <CustomButtonPrimary fullWidth size='large' disableRipple onClick={handleExpand}>{expand ? "Show Less" : "Load More"}</CustomButtonPrimary>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default TopCollectionsSection;
