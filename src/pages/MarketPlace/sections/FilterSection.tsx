import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel, Grid, InputAdornment, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material';
import { CustomButtonPrimary } from '../../../components/CustomButtons';
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { FilterParams } from '../MarketPlace';

// // 'Status', 'Spam', 'Price', 'Collection', 'Currency', 'Categories'];
// enum OptionType {
//   Radio,
//   CurrencyDropdown,
// }
// interface FilterMaster {
//   id: string;
//   name: string;
//   options: FilterOptions[];
// }

// interface FilterOptions {
//   key: string;
//   value: string;
//   type: OptionType;
// }

// var filters: FilterMaster[] = [{ id: "1", name: 'Spam', options: [{ key: 'show', value: 'Show', type: OptionType.Radio }, { key: 'hide', value: 'Hide', type: OptionType.Radio }] },
// { id: "2", name: 'Price', options: [{ key: 'usd', value: 'usd', type: OptionType.CurrencyDropdown }, { key: 'eur', value: 'eur', type: OptionType.CurrencyDropdown }] }]

const FilterSection = (onChange: any) => {

  const handleOnChange = (data: FilterParams[]) => {
    onChange(data);
  }
  return (
    <Grid container>
      <Grid item sx={{ width: "100%" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={'spam-content'}
            id={'spam-header'}
          >
            <Typography>Spam</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            // value={value}
            // onChange={handleChange}
            >
              <FormControlLabel value="Show" control={<Radio />} label="Show" />
              <FormControlLabel value="Hide" control={<Radio />} label="Hide" />
            </RadioGroup>

          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={'price-content'}
            id={'price-header'}
          >
            <Typography>Price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={4}>
              <Select
                labelId="currency"
                id="currency"
                // value={age}
                label="test"
                // onChange={handleChange}
                sx={{ borderRadius: '3%', width: "100%" }}
                size="small" fullWidth variant='outlined'
              >
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>EUR</MenuItem>
                <MenuItem value={30}>TRY</MenuItem>
              </Select>
              <Stack direction="row" spacing={1}>
                <TextField sx={{ input: { backgroundColor: "white", borderRadius: 1 } }} placeholder="Min" fullWidth size='small'></TextField>
                <Typography variant={"h4"} >-</Typography>
                <TextField sx={{ input: { backgroundColor: "white", borderRadius: 1 } }} placeholder="Max" fullWidth size='small'></TextField>
              </Stack>
              <CustomButtonPrimary fullWidth disableRipple>Update</CustomButtonPrimary>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={'collection-content'}
            id={'collection-header'}
          >
            <Typography>Collection</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <TextField
                sx={{ input: { backgroundColor: "white", borderRadius: 1 } }} placeholder="Search" fullWidth size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel control={<Checkbox />} label="Collection" />
              <FormControlLabel control={<Checkbox />} label="Collection" />
              <FormControlLabel control={<Checkbox />} label="Collection" />
              <FormControlLabel control={<Checkbox />} label="Collection" />
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={'collection-content'}
            id={'collection-header'}
          >
            <Typography>Currency</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <FormControlLabel control={<Checkbox />} label="Avax" />
              <FormControlLabel control={<Checkbox />} label="Craft" />
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={'collection-content'}
            id={'collection-header'}
          >
            <Typography>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <FormControlLabel control={<Checkbox />} label="Abstract Sun" />
              <FormControlLabel control={<Checkbox />} label="Anatomize" />
              <FormControlLabel control={<Checkbox />} label="Painting" />
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};
export default FilterSection;
