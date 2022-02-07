import Grid from '@mui/material/Grid';
import React, { SyntheticEvent } from 'react';
import { CustomButtonPrimary } from '../../../components/CustomButtons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface SortType {
    label: string;
    value: number;
}

interface ChipData {
    key: number;
    label: string;
}

const sortItems: SortType[] = [
    {label:"Recently Listed", value:1},
    {label:"Recently Minted", value:2},
    {label:"Recently Sold", value:3},
    {label:"Price Low", value:4},
    {label:"Price High", value:5},
    {label:"Highest sale", value:6},
];

const ListItem = styled('div')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

const SortSection = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedItem, setSelectedItem] = React.useState("Recently Listed");
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(null);
    if(event.target.innerText){
        setSelectedItem(event.target.innerText);
    }
  };

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Buy Now' },
    { key: 1, label: 'Username' },
    { key: 2, label: 'Buy Now' },
    { key: 3, label: 'Username' },
    { key: 4, label: 'Buy Now' },
    { key: 5, label: 'Username' },
    { key: 6, label: 'Buy Now' },
    { key: 7, label: 'Username' },
    { key: 8, label: 'Buy Now' },
    { key: 9, label: 'Username' },
    { key: 10, label: 'Buy Now' },
    { key: 11, label: 'Username' },
    { key: 12, label: 'Buy Now' },
    { key: 13, label: 'Username' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  return (
      <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={9}>
                {chipData.map((data) => (
                            <Chip sx={{margin:0.5, backgroundColor:"white", boxShadow: '0px 1px 0px 0px rgba(0,0,0,0.25)'}} deleteIcon={<ClearIcon/>} onDelete={handleDelete(data)} label={data.label}/>
                    ))}
          </Grid>
          <Grid item xs={3}>
              <CustomButtonPrimary
              id="sort-button"
              aria-controls={open ? 'sort-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick} 
              disableRipple fullWidth endIcon={<ExpandMoreIcon/>}
              >{selectedItem}</CustomButtonPrimary>
              <Menu
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
                    {sortItems.map((item) => (
                        <MenuItem key={item.value} value={item.value} onClick={handleClose}>{item.label}</MenuItem>
                    ))}
                </Menu>
          </Grid>
      </Grid>
  );
};

export default SortSection;
