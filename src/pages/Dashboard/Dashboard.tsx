import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CollectiblesTab from './sections/CollectiblesTab';
import DashboardTab from './sections/DashboardTab';
import LikesTab from './sections/LikesTab';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Dashboard = () => {
    const [value, setValue] = React.useState('dashboard');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid container>
        <Grid item xs={12} container>
            <img width="100%" height="275px" src={require('../../assets/rhino_background.png')}/>
            <Grid container justifyContent="center">
            <img width="130px" height="130px" style={{borderRadius:"50%", border:"10px solid white", marginTop:"-6%"}} src={require('../../assets/profile_pic.png')}/>
            </Grid>
            <Grid container justifyContent="center">
                <Typography gutterBottom>0xeaC9..99F4</Typography>
            </Grid>
        </Grid>
        <Grid item xs={12} container>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box>
                    <TabList onChange={handleChange} aria-label="dashboard tabs" centered>
                        <Tab label="Dashboard" value="dashboard" disableRipple/>
                        <Tab label="Collectibles" value="collectibles" disableRipple/>
                        <Tab label="Likes" value="likes" disableRipple/>
                    </TabList>
                    </Box>
                    <TabPanel value="dashboard">
                        <DashboardTab/>
                    </TabPanel>
                    <TabPanel value="collectibles">
                        <CollectiblesTab/>
                    </TabPanel>
                    <TabPanel value="likes">
                        <LikesTab/>
                    </TabPanel>
                </TabContext>
            </Box>
        </Grid>
    </Grid>
  );
  
}

export default Dashboard