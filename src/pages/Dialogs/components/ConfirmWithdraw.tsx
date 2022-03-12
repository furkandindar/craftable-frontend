import { Dialog, Paper, Slider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { AvaxIcon } from '../../../assets/icons';
import { CustomButtonPurple, CustomButtonSecondary, CustomButtonWhite } from '../../../components/CustomButtons';
import CustomImageHolder from '../../../components/CustomImageHolder';

export interface ConfirmWithdrawProps {
  open: boolean;
  onClose: () => void;
}

function ConfirmWithdraw(props: ConfirmWithdrawProps) {

  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  const handleMaxClick = () => {
    setValue(100);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid container justifyContent={"center"} direction="row" spacing={2}>
        <Paper
          sx={{
            padding: 4,
            backgroundColor: "primary.main", color: "white",
            width: 600
          }}>
          <Stack spacing={1.5} alignItems={"center"}>
            <Grid container justifyContent={"center"} alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant='h6'>Confirm Withdraw</Typography>
                </Grid>
                <Grid item>
                  <CustomImageHolder width={30} height={30} imgUrl={'https://miro.medium.com/max/1000/1*RK1R9BV_5-_2yXLWjuP-qw.png'} alt={'token'}></CustomImageHolder>
                </Grid>
                <Grid item>
                  <Typography variant='h6'>USDT.e</Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"} direction="row" spacing={2}>
              <Grid item xs={6} >
                <Typography>
                  Deposited: 1.41 USDT.e
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  Balance: 0.0 USDT.e
                </Typography>
              </Grid>
            </Grid>
            <Grid container justifyContent={"center"} direction="row" spacing={2}>
            <Grid item container>
            <Paper sx={{ width: "100%", borderRadius:2 }} >
              <Grid container justifyContent={"center"} direction="row" padding={2} alignItems={"center"}>
                <Grid item xs={8}>
                  <Typography>
                    {value}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography textAlign={"right"} color="secondary.main">
                    /100%
                  </Typography>
                </Grid>
                <Grid item xs={2} textAlign={"right"}>
                  <CustomButtonSecondary disableRipple onClick={handleMaxClick}>Max</CustomButtonSecondary>
                </Grid>
                <Grid item xs={12}>
                  <Slider value={value} onChange={handleChange} aria-label="value" />
                </Grid>
              </Grid>
            </Paper>
            </Grid>
            </Grid>
            <Grid container justifyContent={"center"} direction="row" spacing={2}>
              <Grid item xs={6} >
                <Typography>
                  Amount Withdrawing
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  1.41 USDT.e
                </Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography>
                  Free
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  0.0 USDT.e
                </Typography>
              </Grid>

              <Grid item xs={6} paddingTop={10}>
                <Typography>
                  Minimum Received
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  1.39 USDT.e
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>
                  My Remaining Liquidity
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  0.0 USDT.e
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  My Remaining Share
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  0.0%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <CustomButtonWhite fullWidth onClick={handleClose}>Cancel</CustomButtonWhite>
              </Grid>
              <Grid item xs={6}>
                <CustomButtonPurple fullWidth>Approve
                </CustomButtonPurple>
              </Grid>
            </Grid>

          </Stack>
        </Paper>
      </Grid>
    </Dialog >
  );
}

export default ConfirmWithdraw;
