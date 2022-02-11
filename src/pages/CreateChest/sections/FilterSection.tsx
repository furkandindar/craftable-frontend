import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';

const filters = ['Filter','Status','Spam','Price','Collection','Currency','Categories'];

const FilterSection = () => {
  return (
    <Grid container>
        <Grid item>
        {filters.map((filter) => (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={filter + '-content'}
          id={filter + '-header'}
        >
          <Typography>{filter}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
        </Grid>
  </Grid>
  );
};

export default FilterSection;
