import {  Box, CircularProgress, Dialog, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { AvaxIcon } from '../../../assets/icons';
import { CustomButtonWhite } from '../../../components/CustomButtons';
import CustomImageHolder from '../../../components/CustomImageHolder';

export interface WaitConfirmProps {
  open: boolean;
  onClose: () => void;
}

function WaitConfirm(props: WaitConfirmProps) {
  const { onClose, open } = props;

  const handleClose = () => {
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
          <Stack spacing={3} alignItems={"center"} py={3}>
            <Box>
              <CircularProgress sx={{color:"black"}}/>
            </Box>
            <Typography variant='h5'>Waiting For Confirmation</Typography>
            <Typography variant='caption'>Please confirm this transaction in your wallet</Typography>
            <Typography variant='subtitle1'>Claim</Typography>

            <CustomButtonWhite fullWidth sx={{ height: 60}}>
              <Grid container justifyContent={"center"} px={1} direction="row" spacing={2}>
                <Grid item xs={6}>
                  <Stack direction="row" alignItems={"center"} spacing={0.75}>
                    <CustomImageHolder width={25} height={25} imgUrl={'https://miro.medium.com/max/1000/1*RK1R9BV_5-_2yXLWjuP-qw.png'} alt={'token'}></CustomImageHolder>

                    <Typography textAlign={"left"} >
                      vePTP
                    </Typography>
                  </Stack>


                </Grid>
                <Grid item xs={6}>
                  <Typography textAlign={"right"}>
                    $9.722506
                  </Typography>
                </Grid>
              </Grid>
            </CustomButtonWhite>

          </Stack>
        </Paper>
      </Grid>
    </Dialog >
  );
}

export default WaitConfirm;
