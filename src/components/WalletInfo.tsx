import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const CreateButton = styled(Button)({
    borderRadius:30,
    background: `#BF3755`,
    color: 'white',
    margin: '0 1rem 0 1rem',
    textTransform: "none",
    '&:hover':{
        background: `#BF3755`,
    }
});


function WalletInfo() {
  return (
          <CreateButton>0xeaC9..99F4</CreateButton>
      
  );
}

export default WalletInfo;
