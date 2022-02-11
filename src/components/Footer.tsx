import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import backgroundImg from "../assets/footer_bg.png";
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CustomButton from './CustomButton';

const siteLinks = ['Explore','Company','Bond','Craft','Governance','Connect Wallet','Marketplace'];
const otherLinks = ['My Dashboard',"NFT's","New"];
const helpLinks = ['Help Desk', 'Who We Are', 'How To Craft', 'How To Create Chest', 'How To Create NFT'];

const WhiteTypography = styled(Typography)(({ theme }) => ({
    ...theme.typography,
    color: "white",
  }));

const CustomLink = styled(Link)(({ theme }) => ({
    ...theme.typography,
    color: "white",
    textAlign: "left",
    
  }));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHeight: 93,
    lineHeight: '60px',
  }));

const PartnerPaper = () => {
    return(
        <Item sx={{backgroundColor:"#82368C", border:"1px solid rgba(255,255,255,0.5)", color:"white",minWidth:"180px",maxWidth:"210px"}}>
                Partner
        </Item>
    );
}

const Footer = () => {
    const location = useLocation();
    console.log(location.pathname);
    const [isHomePage, setIsHomePage] = useState(false);
    useEffect(() => {
        if(location.pathname === "/"){
            setIsHomePage(true);
        }else{
            setIsHomePage(false);
        }
    }, [isHomePage]);
    
    console.log(isHomePage);
  return (
      <footer>
        {isHomePage ? <>
            <Box padding={2} bgcolor="primary.main" color="white">
            <Grid container direction="row">
                <Grid item xs={0} md={1.25}></Grid>
                <Grid item container xs={12} md={9.5} direction="row" justifyContent="space-between" spacing={1}>
                    <Grid item>
                        <PartnerPaper/>
                    </Grid>
                    <Grid item>
                        <PartnerPaper/>
                    </Grid>
                    <Grid item>
                        <PartnerPaper/>
                    </Grid>
                    <Grid item>
                        <PartnerPaper/>
                    </Grid>
                    <Grid item>
                        <PartnerPaper/>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={1.25}></Grid>
            </Grid>
        </Box>
        <Box bgcolor="primary.main" color="white" sx={{backgroundImage:`url(${backgroundImg})`, backgroundSize:"cover"}}>
            <Grid container direction="row">
              <Grid item xs={0} md={1.25}></Grid>
              <Grid item container xs={12} md={9.5} direction="row" spacing={5} sx={{paddingY:5}}>
                  <Grid item container>
                    <Grid item xs={12} md={6}>
                        <Stack direction="column" spacing={1}>
                        <WhiteTypography sx={{textAlign:{xs:"center", md:"left"}}} fontWeight="bold">Keep in touch</WhiteTypography>
                        <WhiteTypography sx={{textAlign:{xs:"center", md:"left"}}} paddingBottom={1} variant="body2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</WhiteTypography>
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={9} sx={{'&.MuiGrid-item':{paddingLeft:0}}}>
                            <TextField sx={{ input: { backgroundColor:"white", borderRadius:1 } }} placeholder="Your email address" fullWidth size='small'></TextField>
                            </Grid>
                            <Grid item xs={3}>
                            <Button fullWidth sx={{backgroundColor:"white", height:"100%", color:"black", '&:hover':{backgroundColor:"white", color:"black"}}} variant="contained" disableRipple>Sign up</Button>
                            </Grid>
                        </Grid>
                        </Stack>
                    </Grid>
                    <Grid item container xs={12} md={6} alignItems="flex-end" sx={{justifyContent:{xs:"center", md:"flex-end"},padding:{xs:2,md:0}}}>
                        <Stack direction="row" spacing={3}>
                            <FacebookIcon fontSize="large"/>
                            <InstagramIcon fontSize="large"/>
                            <TwitterIcon fontSize="large"/>
                        </Stack>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} >
                      <Divider sx={{borderColor:"white"}}></Divider>
                  </Grid>
                  <Grid item xs={12} container direction="row" spacing={5} justifyContent="space-between">
                      <Grid item xs={12} md={4}>
                          <Stack direction="column" spacing={5}>
                                  <Box sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"}}}>
                                  <img src={require("../assets/footer_logo.png")}/>
                                  </Box>
                                  <Typography sx={{textAlign:{xs:"center", md:"left"}}} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
                          </Stack>
                      </Grid>
                      <Grid item container xs={12} md={8} direction="row" justifyContent="space-between">
                          <Grid item xs={12} md={4}>
                              <Stack direction="column" spacing={3} sx={{padding:{xs:3,md:0}}}>
                                  {siteLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                              </Stack>
                          </Grid>
                          <Grid item xs={12} md={4}>
                                <Stack direction="column" spacing={3} sx={{padding:{xs:3,md:0}}}>
                                  {otherLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                                </Stack>
                          </Grid>
                          <Grid item xs={12} md={4} sx={{padding:{xs:3,md:0}}}>
                                <Stack direction="column" spacing={3}>
                                  {helpLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                                </Stack>
                          </Grid>
                      </Grid>
                      <Grid item xs={12} container sx={{justifyContent:{xs:"center", md:"flex-start"}}}>
                          <WhiteTypography>Copyright © Craftable</WhiteTypography>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={0} md={1.25}></Grid>
          </Grid>
        </Box></> : 
        <>
            <Box bgcolor="primary.main" color="white" sx={{backgroundImage:`url(${backgroundImg})`, backgroundSize:"cover"}}>
            <Grid container direction="row">
              <Grid item xs={0} md={1.25}></Grid>
              <Grid item container xs={12} md={9.5} direction="row" spacing={5} sx={{paddingY:5}}>
                  <Grid item xs={12} container direction="row" spacing={5}>
                      <Grid item xs={12} md={4}>
                          <Stack direction="column" spacing={4}>
                                  <Box sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"}}}>
                                  <img src={require("../assets/footer_logo.png")}/>
                                  </Box>
                                  <Typography sx={{textAlign:{xs:"center", md:"left"}}} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
                          </Stack>
                      </Grid>
                      <Grid item container xs={12} md={8} direction="row">
                          <Grid item container xs={12} md={4} sx={{padding:{xs:3,md:0}}}>
                              <Stack direction="column" spacing={3}>
                                  {siteLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                              </Stack>
                          </Grid>
                          <Grid item container xs={12} md={4} sx={{padding:{xs:3,md:0}}}>
                                <Stack direction="column" spacing={3}>
                                  {otherLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                                </Stack>
                          </Grid>
                          <Grid item container xs={12} md={4} sx={{padding:{xs:3,md:0}}}>
                                <Stack direction="column" spacing={3}>
                                  {helpLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                                </Stack>
                          </Grid>
                      </Grid>
                      <Grid item container xs={12} md={6} alignItems="flex-end" sx={{justifyContent:{xs:"center", md:"flex-start"}}}>
                          <WhiteTypography>Copyright © Craftable</WhiteTypography>
                      </Grid>
                      <Grid item container xs={12} md={6} sx={{justifyContent:{xs:"center", md:"flex-end"}}}>
                        <Stack direction="row" spacing={3}>
                            <FacebookIcon fontSize="large"/>
                            <InstagramIcon fontSize="large"/>
                            <TwitterIcon fontSize="large"/>
                        </Stack>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={0} md={1.25}></Grid>
          </Grid>
        </Box>
        </>
        }
      </footer>
  );
};

export default Footer;
