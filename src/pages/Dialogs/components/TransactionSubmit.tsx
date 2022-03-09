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
            <CheckCircleOutlineRoundedIcon sx={{ fontSize: 60 }} />
            <Typography variant='h6'>Transaction submitted</Typography>

            <CustomButtonWhite fullWidth sx={{ height: 50 }}>
              View On Snow Trace
            </CustomButtonWhite>
            <CustomButtonPurple fullWidth sx={{ height: 50 }}>
              Done
            </CustomButtonPurple>
          </Stack>
        </Paper>
      </Grid>
    </Dialog >
  );
}

export default TransactionSubmit;
