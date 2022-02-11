import React from 'react';
import { CustomButtonPrimary } from './CustomButtons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export interface SortType {
    label: string;
    value: number;
}

interface SortButtonProps {
    sortItems: SortType[],
    onChange: (value: any) => void;
}

const CustomSortButton = (props: SortButtonProps) => {
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedItem, setSelectedItem] = React.useState(props.sortItems[0].label);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(null);
    if(event.target.innerText){
        setSelectedItem(event.target.innerText);
    }
    props.onChange(event.target.value);
  };
  return (
    <>
    <CustomButtonPrimary
    id="sort-button"
    aria-controls={open ? 'sort-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick} 
    disableRipple fullWidth endIcon={<ExpandMoreIcon/>}
    >{selectedItem}</CustomButtonPrimary>
    <Menu
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      sx={{
          '& .MuiPaper-root':{
              backgroundColor:"primary.main",
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
          id="sort-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
          'aria-labelledby': 'sort-button',
          }}
      >
          {props.sortItems.map((item) => (
              <MenuItem key={item.value} value={item.value} onClick={handleClose}>{item.label}</MenuItem>
          ))}
      </Menu>
    </>
  );
};

export default CustomSortButton;
