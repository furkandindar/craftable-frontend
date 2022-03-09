import { Dialog, Paper, Slider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { AvaxIcon } from '../../../assets/icons';
import { CustomButtonPurple, CustomButtonWhite } from '../../../components/CustomButtons';

export interface ConfirmWithdrawProps {
  open: boolean;
  onClose: () => void;
}

function ConfirmWithdraw(props: ConfirmWithdrawProps) {
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
            <Typography variant='h6'>Confirm Withdraw
              <AvaxIcon sx={{ fontSize: 33, marginLeft: 1, marginRight: 1 }} />
              USDT.e
            </Typography>
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
            <Paper sx={{ width: "100%", height: 120, paddingTop: 2 }} >
              <Grid container justifyContent={"center"} direction="row" padding={2}>
                <Grid item xs={8}>
                  <Typography>
                    100
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography textAlign={"right"}>
                    /100%
                  </Typography>
                </Grid>
                <Grid item xs={2} textAlign={"right"}>
                  <CustomButtonPurple sx={{ height: 40 }}>MAX</CustomButtonPurple>
                </Grid>
                <Grid item xs={12}>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </Grid>
              </Grid>
            </Paper>
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
              <Grid item md={6}>
                <CustomButtonWhite fullWidth>Cancel</CustomButtonWhite>
              </Grid>
              <Grid item md={6}>
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
