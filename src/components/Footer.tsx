import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import backgroundImg from "../assets/footer_bg.png";
import Paper from '@mui/material/Paper';

const siteLinks = ['Explore','Company','Bond','Craft','Governance','Connect Wallet','Marketplace'];
const otherLinks = ['My Dashboard',"NFT's","New"];
const helpLinks = ['Help Desk', 'Who We Are', 'Who We Are', 'How To Craft', 'How To Create Chest', 'How To Create NFT'];
const blue = {
  200: '#80BFFF',
  400: '#3399FF',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-size: 0.875rem;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : "#FFFFFF"};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 12px;
  padding: 12px 12px;
  transition: all 150ms ease;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : "#FFFFFF"};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:focus {
    outline: none;
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
  });

const WhiteTypography = styled(Typography)(({ theme }) => ({
    ...theme.typography,
    color: "white",
  }));

const CustomLink = styled(Link)(({ theme }) => ({
    ...theme.typography,
    color: "white",
    textAlign: "left",
    
  }));

const PartnerPaper = () => {
    return(
        <Paper sx={{backgroundColor:"#82368C", border:"1px solid rgba(255,255,255,0.5)", color:"white"}}>
            <Typography align='center'>Partner</Typography>
        </Paper>
    );
}

const Footer = () => {
  return (
      <footer>
        <Box padding={2} bgcolor="primary.main" color="white">
            <Grid container direction="row">
            <Grid item xs={0} md={2}></Grid>
            <Grid item container xs={12} md={8} direction="row" spacing={3}>
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
            <Grid item xs={0} md={2}></Grid>
            </Grid>
        </Box>
        <Box bgcolor="primary.main" color="white" sx={{backgroundImage:`url(${backgroundImg})`, backgroundSize:"cover"}}>
            <Grid container direction="row">
              <Grid item xs={0} md={2}></Grid>
              <Grid item container xs={12} md={8} direction="row" spacing={5} sx={{paddingY:5}}>
                  <Grid item container>
                    <Grid item xs={12} md={6}>
                        <Stack direction="column" spacing={1}>
                        <WhiteTypography fontWeight="bold">Keep in touch</WhiteTypography>
                        <WhiteTypography paddingBottom={1} variant="body2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</WhiteTypography>
                        <Stack direction="row" spacing={1}>
                            <CustomInput placeholder='Your email address' aria-label="email address"/>
                            <Button fullWidth disableRipple sx={{backgroundColor:"white", color:"black", '&:hover':{backgroundColor:"white", color:"black"}}} variant="contained">Sign up</Button>
                        </Stack>
                        </Stack>
                    </Grid>
                    <Grid item container xs={12} md={6} alignItems="flex-end" justifyContent="flex-end">
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
                                  <Box>
                                  <img src={require("../assets/footer_logo.png")}/>
                                  </Box>
                                  <Typography >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
                          </Stack>
                      </Grid>
                      <Grid item container xs={12} md={8} direction="row" justifyContent="space-between">
                          <Grid item xs={12} md={4}>
                              <Stack direction="column" spacing={3}>
                                  {siteLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                              </Stack>
                          </Grid>
                          <Grid item xs={12} md={4}>
                                <Stack direction="column" spacing={3}>
                                  {otherLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                                </Stack>
                          </Grid>
                          <Grid item xs={12} md={4}>
                                <Stack direction="column" spacing={3}>
                                  {helpLinks.map((link) => (
                                      <CustomLink underline='none'>{link}</CustomLink>
                                  ))}
                                </Stack>
                          </Grid>
                      </Grid>
                      <Grid item xs={12}>
                          <WhiteTypography>Copyright © Craftable</WhiteTypography>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={0} md={2}></Grid>
          </Grid>
        </Box>
      </footer>
  );
};

export default Footer;
