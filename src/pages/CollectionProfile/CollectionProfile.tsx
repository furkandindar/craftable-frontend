import { Grid, Paper, Typography, Box } from '@mui/material'
import React from 'react'
import NftCard from '../../components/NftCard'

const CollectionProfile = () => {
  return (
    <Grid container spacing={3} direction="column">
        <Grid item>
            <img width="100%" height="275px" src={require('../../assets/profile-background.png')}/>
        </Grid>
        <Grid item container spacing={3}>
                <Grid item container xs={12} md={3} direction={"column"}>
                    <Grid item container direction="column" sx={{top:"-6%", position:"relative"}} spacing={3}>
                        <Grid item container justifyContent={"center"}>
                        <img width="130px" height="130px" style={{borderRadius:"50%", border:"10px solid white", marginTop:"-6%"}} src={require('../../assets/profile_pic.png')}/>
                        </Grid>
                        <Grid item container justifyContent={"center"} direction={"column"}>
                            <Typography align='center' fontWeight={600}>Username</Typography>
                            <Typography align='center'>0xeaC9..99F4</Typography>
                        </Grid>
                        <Grid item container justifyContent={"center"}>
                            <Paper sx={{bgcolor:"primary.main", width:"100%"}}>
                                <Grid container>
                                    <Grid item container xs={6} justifyContent="center" direction={"column"}>
                                        <Typography variant="body2" align='center' sx={{color:"white"}}>Items</Typography>
                                        <Typography variant="h6" align='center' sx={{color:"white"}}>2500</Typography>
                                    </Grid>
                                    <Grid item container xs={6} justifyContent="center" direction={"column"} sx={{bgcolor:"primary.dark", borderRadius:"0 10px 0 0",p:1}}>
                                        <Typography variant="body2" align='center' sx={{color:"white"}}>Owners</Typography>
                                        <Typography variant="h6" align='center' sx={{color:"white"}}>1062</Typography>
                                    </Grid>
                                    <Grid container xs={6} justifyContent="center" direction={"column"} sx={{bgcolor:"primary.dark", borderRadius:"0 0 0 10px",p:1}}>
                                        <Typography variant="body2" align='center' sx={{color:"white"}}>Floor Price</Typography>
                                        <Typography variant="h6" align='center' sx={{color:"white"}}>2.79</Typography>
                                    </Grid>
                                    <Grid container xs={6} justifyContent="center" direction={"column"}>
                                        <Typography variant="body2" align='center' sx={{color:"white"}}>Volume traded</Typography>
                                        <Typography variant="h6" align='center' sx={{color:"white"}}>2822</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item container justifyContent={"center"}>
                            <Typography fontWeight={600}>Bio</Typography>
                        </Grid>
                        <Grid item container>
                            <Typography align='center' variant='body2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={9} container direction={"column"} spacing={5}>
                    <Grid item container spacing={1} alignItems="center">
                        <Grid item>
                        <Typography variant="h5" sx={{color:"#707070"}}>Collection</Typography>
                        </Grid>
                        <Grid item>
                        <Box sx={{background:"#EFEFEF", borderRadius:"50%", width:30, height:30, justifyContent:"center", display:"flex"}}>
                            <Typography variant="h6" sx={{color:"#707070"}}>9</Typography>
                        </Box>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NftCard/>
                    </Grid>
                    </Grid>
                </Grid>
        </Grid>
    </Grid>
  )
}

export default CollectionProfile