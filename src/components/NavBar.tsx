import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import craftableLogo from "../assets/Craftable_logo.png";
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled, alpha } from '@mui/material/styles';
import WalletInfo from './WalletInfo';
import InputBase from '@mui/material/InputBase';
import MenuItems from './MenuItems';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const CreateButton = styled(Button)({
    borderRadius:30,
    background: `linear-gradient(to left,#BF3755,#82368C)`,
    color: 'white',
    margin: '0 1rem 0 0',
    textTransform: "none",
    '&:hover':{
        background: `linear-gradient(to right,#BF3755,#82368C)`,
    }
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    flexGrow: 1,
    border: "1px solid grey",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='transparent' elevation={0}>
            <Toolbar>
            
            <img src={craftableLogo} alt='craftable' style={{width:"10%"}}/>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
            <MenuItems isLoggedIn={isLoggedIn}/>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {isLoggedIn ? <WalletInfo/> : null}
            <CreateButton onClick={()=>{setIsLoggedIn(!isLoggedIn)}} variant="contained">{isLoggedIn ? "Create" : "Connect Wallet"}</CreateButton>
            
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default NavBar
