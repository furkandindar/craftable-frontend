import React from 'react';
import { Button, ButtonProps, Grid, IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Box from '@mui/system/Box';
import Avatar from "@mui/material/Avatar";
import LogoutIcon from '@mui/icons-material/Logout';

const CreateButton = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius:30,
    background: '#e4e4e4',
    color: 'black',
    margin: '0 1rem 0 1rem',
    textTransform: "none",
    '&:hover':{
    background: `#BF3755`,
    }
})
);




function WalletInfo() {
  return (
          // <CreateButton>0xeaC9..99F4</CreateButton>
          <Box sx={{marginX:2,borderRadius:25, paddingRight:1}} bgcolor="secondary.main">
            <Grid container alignItems="center" spacing={0.5}>
              <Grid item>
                <Avatar sx={{backgroundColor:"primary.main", height:"50px", width:"50px", "&:hover":{backgroundColor:"yellow"}}}>d</Avatar>
              </Grid>
              <Grid item>
                <Typography>0xeaC9..99F4</Typography>
              </Grid>
              <Grid item>
                <IconButton size='small'>
                <LogoutIcon fontSize='small' sx={{color:"black"}}/>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
      
  );
}

export default WalletInfo;
