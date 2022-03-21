import { Dialog, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { AvaxIcon } from '../../../assets/icons';
import { CustomButtonPurple, CustomButtonSecondary, CustomButtonWhite } from '../../../components/CustomButtons';
import CustomImageHolder from '../../../components/CustomImageHolder';
import CustomTextField from '../../../components/CustomTextField';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';

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
            backgroundColor: "primary.main", color: "white",
            width: 600
          }}>
          <Stack spacing={4} alignItems={"center"}>
            <Grid container justifyContent={"center"} alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant='h6'>Confirm Deposit</Typography>
              </Grid>
              <Grid item xs={1} md={0.8}>
                <CustomImageHolder width={30} height={30} imgUrl={'https://miro.medium.com/max/1000/1*RK1R9BV_5-_2yXLWjuP-qw.png'} alt={'token'}></CustomImageHolder>
              </Grid>
              <Grid item>
                <Typography variant='h6'>USDT.e</Typography>
              </Grid>
            </Grid>
            <CustomTextField InputProps={{ endAdornment: <CustomButtonSecondary disableRipple>MAX</CustomButtonSecondary>, sx: { height: 60, background: "white", borderRadius:25} }} type={"number"} placeholder={"0.00"}></CustomTextField>
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
              <Grid item container alignItems={"center"} xs={6} >
                <Typography pr={0.5}>
                  Fee
                </Typography>
                <Tooltip title="Withdrawal fees in Craftable range from 25% to 0.01%" placement='top' arrow>
                    <InfoOutlinedIcon fontSize='small'/>
                </Tooltip>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  0.0 USDT.e
                </Typography>
              </Grid>

              <Grid item container alignItems={"center"} xs={6} >
                <Typography pr={0.5}>
                  My Liquidity
                </Typography>
                <Tooltip title="Liquidity owned by you after adding liquidity." placement='top' arrow>
                    <InfoOutlinedIcon fontSize='small'/>
                </Tooltip>
              </Grid>

              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  80,000.0 USDT.e
                </Typography>
              </Grid>

              <Grid item container alignItems={"center"} xs={6} >
                <Typography pr={0.5}>
                  Pool Share
                </Typography>
                <Tooltip title="Percentage of the token pool you will own after adding the liquidity." placement='top' arrow>
                    <InfoOutlinedIcon fontSize='small'/>
                </Tooltip>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>
                  0.03%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <CustomButtonWhite disableRipple fullWidth onClick={handleClose}>Cancel</CustomButtonWhite>
              </Grid>
              <Grid item xs={6}>
                <CustomButtonPurple fullWidth disableRipple>
                  <Grid container justifyContent={"center"} alignItems={"center"} spacing={1}>
                    <Grid item>
                      <Typography variant='button'>Approve</Typography>
                    </Grid>
                    <Grid item>
                      <CustomImageHolder width={20} height={20} imgUrl={'https://miro.medium.com/max/1000/1*RK1R9BV_5-_2yXLWjuP-qw.png'} alt={'token'}></CustomImageHolder>
                    </Grid>
                    <Grid item>
                      <Typography variant='button'>USDT.e</Typography>
                    </Grid>
                  </Grid>
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
