import React from 'react';
import Button, {ButtonProps} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const CustomButtonStyled = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: 25,
  })
  );

const CustomButton = (props: ButtonProps) => {
  return <CustomButtonStyled {...props} disableRipple></CustomButtonStyled>;
};

export default CustomButton;
