import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import MiniCollectionCard from '../../../components/MiniCollectionCard';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';

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
        {/* <Collapse in={expand} timeout="auto" unmountOnExit>
            <Grid item container direction="row" justifyContent="center" spacing={3}>
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
            </Grid>
        </Collapse> */}
        <Grid item container justifyContent="center">
            <Button variant='contained' onClick={handleExpand} disableRipple>Go to Rankings</Button>
        </Grid>
    </Grid>
  );
};

export default TopCollectionsSection;
