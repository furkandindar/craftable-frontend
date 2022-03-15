import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, FormControlLabel, Paper, Radio, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CustomButtonGradient, CustomButtonPrimary, CustomButtonWhite } from '../../components/CustomButtons';
import createChestImg from "../../assets/create-chest.png";
import createNftImg from "../../assets/create-nft.png";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';


const CreateChestNft = () => {
    return (
        <Grid container direction="row" spacing={3}>
            <Grid item xs={12} rowSpacing={3}>
                <Grid container justifyContent={"center"} direction="row" spacing={2}>
                    <Grid item xs={6} justifyContent={"center"} direction="row">
                        <Paper
                            sx={{
                                padding: 10,
                                backgroundColor: "primary.main", color: "white", '& .MuiMenuItem-root': {
                                    borderBottom: "1px solid white",
                                },
                                '& .MuiMenuItem-root:last-child': {
                                    borderBottom: 'none'
                                }
                            }}>
                            <Stack spacing={4} alignItems={"center"}>
                                <Avatar src={createChestImg} sx={{ width: 120, height: 120 }} />
                                <Typography variant='h4'>Chest</Typography>
                                <Typography align='center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Typography>
                               
                                <Link component={RouterLink} underline="none" color="inherit" sx={{fontFamily:"Poppins", '&:hover': {color:"primary.main", fontWeight:"bold"}}} to="/create/chest"> <CustomButtonWhite sx={{ width: 120 }} disableRipple size='large'>Create</CustomButtonWhite></Link>

                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} justifyContent={"center"} direction="row">
                        <Paper
                            sx={{
                                padding: 10,
                              '& .MuiMenuItem-root': {
                                    borderBottom: "1px solid white",
                                },
                                '& .MuiMenuItem-root:last-child': {
                                    borderBottom: 'none'
                                }
                            }}>
                            <Stack spacing={4} alignItems={"center"}>
                                <Avatar src={createNftImg} sx={{ width: 120, height: 120 }} />
                                <Typography variant='h4'>NFT’s</Typography>
                                <Typography align='center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Typography>
                                
                                <Link component={RouterLink} underline="none" color="inherit" sx={{fontFamily:"Poppins", '&:hover': {color:"primary.main", fontWeight:"bold"}}} to="/create/nft"> <CustomButtonGradient sx={{ width: 120 }} disableRipple size='large'>Create</CustomButtonGradient></Link>

                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default CreateChestNft;
