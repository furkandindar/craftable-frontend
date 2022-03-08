import {  Dialog, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { AvaxIcon } from '../../../assets/icons';
import { CustomButtonWhite } from '../../../components/CustomButtons';

export interface WaitConfirmProps {
  open: boolean;
  onClose: () => void;
}

function WaitConfirm(props: WaitConfirmProps) {
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
            <Typography variant='h5'>Waiting For Confirmation</Typography>
            <Typography variant='h6'>Please confirm this transaction in your wallet</Typography>
            <Typography variant='h5'>Claim</Typography>

            <CustomButtonWhite fullWidth sx={{ height: 60 }}>
              <Grid container justifyContent={"center"} direction="row" spacing={2}>
                <Grid item xs={6}>
                  <Stack direction="row">
                    <AvaxIcon sx={{ fontSize: 22, marginLeft: 1, marginRight: 1 }} />

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
