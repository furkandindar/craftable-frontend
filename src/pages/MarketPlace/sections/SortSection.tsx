import Grid from '@mui/material/Grid';
import React, { SyntheticEvent } from 'react';
import { CustomButtonPrimary } from '../../../components/CustomButtons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';
import CustomSortButton, { SortType } from '../../../components/CustomSortButton';


interface ChipData {
    key: number;
    label: string;
}

const sortItems: SortType[] = [
    {label:"Recently Listed", value:1},
    {label:"Recently Minted", value:2},
    {label:"Recently Sold", value:3},
    {label:"Price (Lowest to highest)", value:4},
    {label:"Price (Highest to lowest)", value:5},
    {label:"Highest sale", value:6},
];

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

  const handleOnSortChange = (value:any) => {
      console.log(value);
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
      <Grid container direction="row" sx={{justifyContent:{xs:"center", md:"space-between"}}} spacing={3} marginBottom={3}>
          <Grid item xs={12} md={8.5}>
                {chipData.map((data) => (
                            <Chip sx={{margin:0.5, backgroundColor:"white", boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.25)'}} deleteIcon={<ClearIcon/>} onDelete={handleDelete(data)} label={data.label}/>
                    ))}
          </Grid>
          <Grid item xs={7} md={3.5}>
                <CustomSortButton onChange={handleOnSortChange} sortItems={sortItems}></CustomSortButton>
          </Grid>
      </Grid>
  );
};

export default SortSection;
