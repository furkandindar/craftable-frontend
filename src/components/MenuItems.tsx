import React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography, { TypographyProps } from '@mui/material/Typography';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

const CustomLink = styled(Typography)<TypographyProps>(({theme}) => ({
  cursor: "pointer",
    '&:hover': {
        color: "#82368C",
        fontWeight: "bold",
    },
}));

// (({theme}) => ({
//   cursor: "pointer",
//     '&:hover': {
//         color: theme.palette.primary,
//         //fontWeight: "bold",
//     },
// }));

const ExploreMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
        <CustomLink
          id="explore"
          aria-controls={open ? 'explore-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          onMouseOver={handleClick}
        >
          Explore
        </CustomLink>
        <Menu
          sx={{
              '& .MuiPaper-root':{
                  backgroundColor:"#82368C",
                  color: 'white',
              },
              '& .MuiMenuItem-root':{
                  borderBottom: "1px solid white"
              },
              '& .MuiMenuItem-root:last-child':{
                borderBottom: 'none'
              },
              '& .MuiList-root': {
                padding: 0,
            }
          }}
          id="explore-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'explore',
            onMouseLeave: handleClose
          }}
        >
          <MenuItem onClick={handleClose}>Marketplace</MenuItem>
          <MenuItem onClick={handleClose}>New</MenuItem>
        </Menu>
        </>
    )
}

const CompanyMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
        <CustomLink
          id="company"
          aria-controls={open ? 'company-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          //onMouseOver={handleClick}
        >
          Company
        </CustomLink>
        <Menu
          sx={{
              '& .MuiPaper-root':{
                  backgroundColor:"#BF3755",
                  color: 'white',
              },
              '& .MuiMenuItem-root':{
                borderBottom: "1px solid white",
                justifyContent: "center"
              },
              '& .MuiMenuItem-root:last-child':{
                  borderBottom: 'none'
              },
              '& .MuiList-root': {
                  padding: 0,
              }
          }}
          id="company-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'company',
            //onMouseLeave: handleClose
          }}
        >
          <MenuItem sx={{textAlign:"center"}} onClick={handleClose}>Help Desk</MenuItem>
          <MenuItem onClick={handleClose}>Who We Are</MenuItem>
          <MenuItem onClick={handleClose}>How To Craft</MenuItem>
          <MenuItem onClick={handleClose}>How To Create Chest</MenuItem>
          <MenuItem onClick={handleClose}>How To Create NFT</MenuItem>
        </Menu>
        </>
    )
}

interface MenuItemProps {
    isLoggedIn: boolean
}


const MenuItems = ({isLoggedIn}:MenuItemProps) => {

    return (
      <Stack direction="row" spacing={4}>
          <ExploreMenu/>
          <CustomLink>Earn</CustomLink>
          {isLoggedIn ? 
          <>
          <CustomLink>Bond</CustomLink>
          <CustomLink>Craft</CustomLink>
          <CustomLink>Governance</CustomLink>
          </> : null}
      </Stack>
    );
}

export default MenuItems;
