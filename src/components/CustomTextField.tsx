import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { InputProps } from '@mui/material';

export const CustomTextFieldStyled = styled(TextField)<TextFieldProps>(({theme}) => ({
  '& fieldset':{
    borderRadius:25,
  },
})
);

const CustomTextField = (props: TextFieldProps) => {
  return (
      <CustomTextFieldStyled {...props} size="small" fullWidth InputLabelProps={{shrink:false}}></CustomTextFieldStyled>
  );
};

export default CustomTextField;
