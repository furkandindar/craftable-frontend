import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FeaturedChestSection = () => {
    let navigate = useNavigate();

    const handleChestClick = () => {
        navigate("chestName");
    }
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
                <Box position={"relative"} sx={{width:"100%"}} onClick={handleChestClick}>
                    <img width={"100%"} src={require('../../../assets/chest1.png')}></img>
                    <Box position={"absolute"} sx={{top:"85%", left:"8%"}}>
                    <Typography sx={{color:"white"}} fontWeight={600} variant="h5">Chest #1</Typography>
                    </Box>
                </Box>
            
        </Grid>
        <Grid item xs={12} md={6}>
                <Box position={"relative"} sx={{width:"100%"}} onClick={handleChestClick}>
                    <img width={"100%"} src={require('../../../assets/chest1.png')}></img>
                    <Box position={"absolute"} sx={{top:"85%", left:"8%"}}>
                    <Typography sx={{color:"white"}} fontWeight={600} variant="h5">Chest #1</Typography>
                    </Box>
                </Box>
        </Grid>
    </Grid>
  )
}

export default FeaturedChestSection