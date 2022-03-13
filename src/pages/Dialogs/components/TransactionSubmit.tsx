import { Dialog, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CustomButtonPurple, CustomButtonWhite } from '../../../components/CustomButtons';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';


export interface TransactionSubmitProps {
  open: boolean;
  onClose: () => void;
}

function TransactionSubmit(props: TransactionSubmitProps) {
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
          <Stack spacing={2} alignItems={"center"}>
            <CheckCircleOutlineRoundedIcon sx={{ fontSize: 60 }} />
            <Typography variant='h6' pb={3}>Transaction submitted</Typography>

            <CustomButtonWhite disableRipple fullWidth >
              View On Snow Trace
            </CustomButtonWhite>
            <CustomButtonPurple disableRipple fullWidth onClick={handleClose}>
              Done
            </CustomButtonPurple>
          </Stack>
        </Paper>
      </Grid>
    </Dialog >
  );
}

export default TransactionSubmit;
