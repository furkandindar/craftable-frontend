import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import craftableLogo from "../assets/Craftable_logo.png";
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CustomButtonGradient, CustomButtonGradientToBlack } from './CustomButtons';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #d3d3d3",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  '&:focus-within': {
    border:"none",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchLarge = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #d3d3d3",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  '&:focus-within': {
    border:"none",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    borderRadius: theme.shape.borderRadius,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        boxShadow: '0px 0px 9px 1px rgba(43,43,43,0.30)',
        width: '35ch',
      },
    },
  },
}));

const StyledInputBaseLarge = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width:"100%",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    borderRadius: theme.shape.borderRadius,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      '&:focus': {
        boxShadow: '0px 0px 9px 1px rgba(43,43,43,0.30)',
      },
    },
  },
}));

const ExploreMenu = () => {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
        <Typography
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={open ? {alignItems:"center", display:"flex",color:"primary.main", fontWeight:"bold",  '&:hover': {color:"primary.main", fontWeight:"bold", cursor:"pointer"}} : {alignItems:"center", display:"flex", '&:hover': {color:"primary.main", fontWeight:"bold", cursor:"pointer"}}}
        >
          Explore
          <ExpandMoreIcon/>
        </Typography>
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          sx={{'& .MuiList-root': {
            padding: 0,
            paddingTop:"0px !important",
            paddingBottom:0,
          },
          '& .MuiMenu-list':{
            padding:0,
            paddingTop:"0px !important",
            paddingBottom:0,
          }}}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
              <Paper sx={{backgroundColor:"primary.main", color:"white", height:"100%",'& .MuiMenuItem-root':{
                  borderBottom: "1px solid white",
              },
              '& .MuiMenuItem-root:last-child':{
                borderBottom: 'none'
              },
              }}>
                  <MenuList>
                    <MenuItem onClick={(event)=>{navigate("/marketplace");handleClose();}}>Marketplace</MenuItem>
                    <MenuItem onClick={(event)=>{navigate("/explore");handleClose();}}>Collection</MenuItem>
                    <MenuItem onClick={(event)=>{navigate("/chest");handleClose();}}>Chest</MenuItem>
                    <MenuItem onClick={(event)=>{navigate("/company");handleClose();}}>Company</MenuItem>
                  </MenuList>
              </Paper>
        </Menu>
      </div>
  );
}

function NavBar() {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [searchBoxClicked, setSearchBoxClicked] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [openProfile, setOpenProfile] = React.useState(false);
  // const anchorRefProfile = React.useRef<HTMLButtonElement>(null);

  // const handleToggleProfile = () => {
  //   setOpenProfile((prevOpen) => !prevOpen);
  // };

  // const handleCloseProfile = (event: Event | React.SyntheticEvent) => {
  //   setOpenProfile(false);
  // };
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(anchorElProfile);
  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorElProfile(null);
  };

  
  return (
    <AppBar position="static" color='transparent'>
        <Toolbar>
          <Box sx={{ mr: 7, display: { xs: 'none', md: 'flex' } }}>
            <img src={craftableLogo} alt='craftable' style={{ maxWidth: "175px", cursor:"pointer" }} onClick={()=>{navigate("/")}} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <Box sx={{ ml: 2, display: { xs: 'flex', md: 'none' } }}>
            <img src={craftableLogo} alt='craftable' style={{ maxWidth: "175px", cursor:"pointer" }} onClick={()=>{navigate("/")}}/>
          </Box>
          <Box sx={{flexGrow:2,display: { xs: 'none', md: 'flex' }}}>
            {isLoggedIn ?
            <Search onFocus={()=>{setSearchBoxClicked(!searchBoxClicked)}} onBlur={()=>{setSearchBoxClicked(!searchBoxClicked)}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={searchBoxClicked ? "Search items, collections and accounts" : "Search"}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>:
          <SearchLarge onFocus={()=>{setSearchBoxClicked(!searchBoxClicked)}} onBlur={()=>{setSearchBoxClicked(!searchBoxClicked)}} >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBaseLarge
            placeholder="Search items, collections and accounts"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchLarge>}
          </Box>
          <Box sx={{flexGrow:1,display: { xs: 'none', md: 'flex', justifyContent: "flex-end"} }}>
            <Stack direction="row" spacing={3} alignItems="center">
              {isLoggedIn ? <>
                <ExploreMenu/>
                <Link component={RouterLink} underline="none" color="inherit" sx={{fontFamily:"Poppins", '&:hover': {color:"primary.main", fontWeight:"bold"}}} to="/earn">Earn</Link>
                <Link component={RouterLink} underline="none" color="inherit"  sx={{fontFamily:"Poppins", '&:hover': {color:"primary.main", fontWeight:"bold"}}} to="/bond">Bond</Link>
                <Link component={RouterLink} underline="none" color="inherit" sx={{fontFamily:"Poppins", '&:hover': {color:"primary.main", fontWeight:"bold"}}} to="/craft">Craft</Link>
                <Link component={RouterLink} underline="none" color="inherit" sx={{fontFamily:"Poppins", '&:hover': {color:"primary.main", fontWeight:"bold"}}} to="/governance">Governance</Link>
              </>
               : 
               <>
                <ExploreMenu/>
                <Link component={RouterLink} underline="none" color="inherit" sx={{fontFamily:"Poppins", '&:hover': {color:"primary.main", fontWeight:"bold"}}} to="/earn">Earn</Link>
               </>}
            </Stack>
          </Box>
          <Box sx={{display: { xs: 'none', md: 'flex', justifyContent: "flex-end" } }}>
          <IconButton sx={{ mx: 3 }} onClick={colorMode.toggleColorMode} color="inherit">
               {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
             </IconButton>
             {isLoggedIn ?
               <Box sx={{ marginRight: 2, borderRadius: 50 }} bgcolor="secondary.main">
                 <Grid container alignItems="center" spacing={0.5}>
                   <Grid item>
                     <div>
                        <IconButton
                        id="profile-button"
                        aria-controls={profileOpen ? "profile-menu" : undefined}
                        aria-expanded={profileOpen ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleProfileClick}
                        sx={{padding:0}} disableRipple>
                                    <Avatar sx={{ backgroundColor: "primary.main", height: "40.5px", width: "40.5px", "&:hover": { border: "3px solid white" } }}>P</Avatar>
                                    </IconButton>
                        <Menu
                          open={profileOpen}
                          anchorEl={anchorElProfile}
                          onClose={handleProfileClose}
                          sx={{'& .MuiList-root': {
                            padding: 0,
                            paddingTop:"0px !important",
                            paddingBottom:0,
                          },
                          '& .MuiMenu-list':{
                            padding:0,
                            paddingTop:"0px !important",
                            paddingBottom:0,
                          }}}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                              <Paper sx={{backgroundColor:"primary.main", color:"white",'& .MuiMenuItem-root':{
                                  borderBottom: "1px solid white",
                              },
                              '& .MuiMenuItem-root:last-child':{
                                borderBottom: 'none'
                              },
                              }}>
                                  <MenuList>
                                    <MenuItem onClick={()=>{navigate("/dashboard");handleProfileClose()}}>Dashboard</MenuItem>
                                    <MenuItem onClick={()=>{setIsLoggedIn(!isLoggedIn);handleProfileClose()}}>Logout</MenuItem>
                                  </MenuList>
                              </Paper>
                        </Menu>
                      </div>
                   </Grid>
                   <Grid item paddingX={2}>
                     <Typography>0xeaC9..99F4</Typography>
                   </Grid>
                 </Grid>
               </Box> : null}
             {isLoggedIn ? <CustomButtonGradientToBlack disableRipple onClick={()=> {navigate("/create")}}>Create</CustomButtonGradientToBlack> : <CustomButtonGradient disableRipple onClick={() => { setIsLoggedIn(!isLoggedIn) }} sx={{ minWidth: "125px" }}>Connect Wallet</CustomButtonGradient>}
          </Box>
        </Toolbar>
    </AppBar>
  );
}

export default NavBar
