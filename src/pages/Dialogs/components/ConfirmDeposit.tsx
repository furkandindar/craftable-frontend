import { Dialog, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { AvaxIcon } from '../../../assets/icons';
import { CustomButtonPurple, CustomButtonWhite } from '../../../components/CustomButtons';
import CustomTextField from '../../../components/CustomTextField';

export interface ConfirmDepositProps {
  open: boolean;
  onClose: () => void;
}

function ConfirmDeposit(props: ConfirmDepositProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid container justifyContent={"center"} direction="row" spacing={2}>
        <Paper
          sx={{
            padding: 4,
            background: "#82368c", color: "white", '& .MuiMenuItem-root': {
              borderBottom: "1px solid white",
            },
            '& .MuiMenuItem-root:last-child': {
              borderBottom: 'none'
            },
            width: 600
          }}>
          <Stack spacing={4} alignItems={"center"}>
            <Typography variant='h6'>Confirm Deposit
              <AvaxIcon sx={{ fontSize: 33, marginLeft: 1, marginRight: 1 }} />
              USDT.e
            </Typography>
            <CustomTextField InputProps={{ endAdornment: <CustomButtonPurple sx={{ height: 40 }}>MAX</CustomButtonPurple>, sx: { height: 60, background: "white" } }} type={"number"} placeholder={"0.00"}></CustomTextField>
            <Grid container justifyContent={"center"} direction="row" spacing={2}>
              <Grid item xs={6} >
                <Typography>
                  Token Price
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  $1
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
                  My Liquidity
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  80,000.0 USDT.e
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>
                  Pool Share
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  0.03%
                </Typography>
              </Grid>
              <Grid item md={6}>
                <CustomButtonWhite fullWidth>Cancel</CustomButtonWhite>
              </Grid>
              <Grid item md={6}>
                <CustomButtonPurple fullWidth>Approve
                  <AvaxIcon sx={{ fontSize: 22, marginLeft: 1, marginRight: 1 }} />
                  USDT.e
                </CustomButtonPurple>
              </Grid>
            </Grid>

          </Stack>
        </Paper>
      </Grid>
    </Dialog >
  );
}

export default ConfirmDeposit;
