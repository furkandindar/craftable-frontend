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
import LogoutIcon from '@mui/icons-material/Logout';
import { CustomButtonGradient, CustomButtonGradientToBlack } from './CustomButtons';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { routes } from '../shared/Breadcrumb';
import { Link } from 'react-router-dom';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: "1px solid black",
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(8),
    width: 'auto',
  },
  zIndex: 15,
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function NavBar() {
  const routexx = routes.filter(x => x.hidden !== true);
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
  return (
    // <AppBar position="static" color='transparent'>

    //   <Toolbar>
    //     <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
    //       <img src={craftableLogo} alt='craftable' style={{ maxWidth: "175px" }} />
    //     </Box>
    //     <Box sx={{ flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}>
    //       <Search onFocus={() => setSearchBoxClicked(!searchBoxClicked)} onBlur={() => setSearchBoxClicked(!searchBoxClicked)}>
    //         <SearchIconWrapper>
    //           <SearchIcon />
    //         </SearchIconWrapper>
    //         <StyledInputBase
    //           placeholder="Search..."
    //           inputProps={{ 'aria-label': 'search' }}
    //         />
    //       </Search>
    //     </Box>

    //     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //       <IconButton
    //         size="large"
    //         aria-label="account of current user"
    //         aria-controls="menu-appbar"
    //         aria-haspopup="true"
    //         onClick={handleOpenNavMenu}
    //         color="inherit"
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Menu
    //         id="menu-appbar"
    //         anchorEl={anchorElNav}
    //         anchorOrigin={{
    //           vertical: 'bottom',
    //           horizontal: 'left',
    //         }}
    //         keepMounted
    //         transformOrigin={{
    //           vertical: 'top',
    //           horizontal: 'left',
    //         }}
    //         open={Boolean(anchorElNav)}
    //         onClose={handleCloseNavMenu}
    //         sx={{
    //           display: { xs: 'block', md: 'none' },
    //         }}
    //       >
    //         {routexx.map((route) => (
    //           <MenuItem key={route.navText} onClick={handleCloseNavMenu}>
    //             <Link to={route.path}><Typography textAlign="center">{route.navText}</Typography></Link>
    //           </MenuItem>
    //         ))}
    //       </Menu>
    //     </Box>
    //     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //       <img src={craftableLogo} alt='craftable' style={{ maxWidth: "200px" }} />
    //     </Box>
    //     <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex', justifyContent: "flex-end" } }}>
    //       <Stack spacing={3} direction="row">
    //         {isLoggedIn ? <>
    //           {!searchBoxClicked ?
    //             <>{routexx.map((route) => (
    //               // <Typography
    //               //   key={route.navText}
    //               //   onClick={handleCloseNavMenu}
    //               // >
    //               //   {route.navText}
    //               // </Typography>
    //               <MenuItem component={Link} to={route.path}><Typography textAlign="center">{route.navText}</Typography></MenuItem>

    //             ))}</> : <> {routexx.map((route, index) => (
    //               index < 2 ?
    //                 // <Typography
    //                 //   key={route.navText}
    //                 //   onClick={handleCloseNavMenu}
    //                 // >
    //                 //   {route.navText}
    //                 // </Typography> : null
    //                 <MenuItem component={Link} to={route.path}><Typography textAlign="center">{route.navText}</Typography></MenuItem> : null
    //             ))}</>}</> : <>
    //           {routexx.map((route, index) => (
    //             index < 2 ?
    //               // <Typography
    //               //   key={route.navText}
    //               //   onClick={handleCloseNavMenu}
    //               // >
    //               //   {route.navText}
    //               // </Typography> : null
    //               <MenuItem component={Link} to={route.path}><Typography textAlign="center">{route.navText}</Typography></MenuItem> : null
    //           ))}
    //         </>}
    //       </Stack>
    //     </Box>

    //     <Box sx={{ flexGrow: 0 }}>
    //       <Stack direction="row">
    //         <IconButton sx={{ mx: 3 }} onClick={colorMode.toggleColorMode} color="inherit">
    //           {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    //         </IconButton>
    //         {isLoggedIn ?
    //           <Box sx={{ marginRight: 2, borderRadius: 50 }} bgcolor="secondary.main">
    //             <Grid container alignItems="center" spacing={0.5}>
    //               <Grid item>
    //                 <Avatar sx={{ backgroundColor: "primary.main", height: "40.5px", width: "40.5px", "&:hover": { border: "3px solid white" } }}>P</Avatar>
    //               </Grid>
    //               <Grid item>
    //                 <Typography>0xeaC9..99F4</Typography>
    //               </Grid>
    //               <Grid item>
    //                 <IconButton size='small' onClick={() => { setIsLoggedIn(!isLoggedIn) }}>
    //                   <LogoutIcon fontSize='small' sx={{ color: "black" }} />
    //                 </IconButton>
    //               </Grid>
    //             </Grid>
    //           </Box> : null}
    //         {isLoggedIn ? <CustomButtonGradientToBlack>Create</CustomButtonGradientToBlack> : <CustomButtonGradient onClick={() => { setIsLoggedIn(!isLoggedIn) }} sx={{ minWidth: "125px" }}>Connect Wallet</CustomButtonGradient>}
    //       </Stack>
    //     </Box>
    //   </Toolbar>
    // </AppBar>
    <AppBar position="static" color='transparent'>
        <Toolbar>
          <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <img src={craftableLogo} alt='craftable' style={{ maxWidth: "175px" }} />
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
              {routexx.map((route) => (
                <MenuItem key={route.navText} onClick={handleCloseNavMenu}>
                  <Link to={route.path}><Typography textAlign="center">{route.navText}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ ml: 2, display: { xs: 'flex', md: 'none' } }}>
            <img src={craftableLogo} alt='craftable' style={{ maxWidth: "175px" }} />
          </Box>
               <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex', justifyContent: "flex-end" } }}>
           <Stack spacing={3} direction="row">
             {isLoggedIn ? <>
              {routexx.map((route, index) => (
                   <MenuItem key={route.navText} component={Link} to={route.path}><Typography textAlign="center">{route.navText}</Typography></MenuItem>
               ))}
               </> : <>
               {routexx.map((route, index) => (
                 index < 2 ?
                   <MenuItem key={route.navText} component={Link} to={route.path}><Typography textAlign="center">{route.navText}</Typography></MenuItem> : null
               ))}
             </>}
           </Stack>
         </Box>
          <Box sx={{ flexGrow: 1, display:"flex" }}>
          <IconButton sx={{ mx: 3 }} onClick={colorMode.toggleColorMode} color="inherit">
               {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
             </IconButton>
             {isLoggedIn ?
               <Box sx={{ marginRight: 2, borderRadius: 50 }} bgcolor="secondary.main">
                 <Grid container alignItems="center" spacing={0.5}>
                   <Grid item>
                     <Avatar sx={{ backgroundColor: "primary.main", height: "40.5px", width: "40.5px", "&:hover": { border: "3px solid white" } }}>P</Avatar>
                   </Grid>
                   <Grid item>
                     <Typography>0xeaC9..99F4</Typography>
                   </Grid>
                   <Grid item>
                     <IconButton size='small' onClick={() => { setIsLoggedIn(!isLoggedIn) }}>
                       <LogoutIcon fontSize='small' sx={{ color: "black" }} />
                     </IconButton>
                   </Grid>
                 </Grid>
               </Box> : null}
             {isLoggedIn ? <CustomButtonGradientToBlack disableRipple>Create</CustomButtonGradientToBlack> : <CustomButtonGradient disableRipple onClick={() => { setIsLoggedIn(!isLoggedIn) }} sx={{ minWidth: "125px" }}>Connect Wallet</CustomButtonGradient>}
          </Box>
        </Toolbar>
    </AppBar>
  );
}

export default NavBar
