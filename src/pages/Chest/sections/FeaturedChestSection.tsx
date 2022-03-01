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
        <Grid item xs={12} md={7}>
            <Paper sx={{width:"100%", height:"400px"}} onClick={handleChestClick}>
                <Box position={"relative"}>
                    <img width={"100%"} height={"400px"} src={require('../../../assets/chest1.png')}></img>
                    <Box position={"absolute"} sx={{top:"85%", left:"8%"}}>
                    <Typography sx={{color:"white"}} fontWeight={600} variant="h5">Chest #1</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
            <Paper sx={{width:"100%", height:"400px"}} onClick={handleChestClick}>
                <Box position={"relative"}>
                    <img width={"100%"} height={"400px"} src={require('../../../assets/chest2.png')}></img>
                    <Box position={"absolute"} sx={{top:"85%", left:"8%"}}>
                    <Typography sx={{color:"white"}} fontWeight={600} variant="h5">Chest #1</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default FeaturedChestSection