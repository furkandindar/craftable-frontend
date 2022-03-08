import { Box, Dialog, IconButton, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CustomButtonPurple } from '../../../components/CustomButtons';
import CustomTextField from '../../../components/CustomTextField';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import CloseIcon from '@mui/icons-material/Close';

export interface VoteProps {
  open: boolean;
  onClose: () => void;
}

function Vote(props: VoteProps) {
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
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}></Box>
            <Box>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Stack spacing={4} alignItems={"center"}>
            <Typography variant='h5'>Vote</Typography>
            <Typography sx={{ fontSize: 13, padding: 2 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Typography>

            <Grid container justifyContent={"center"} direction="row" spacing={2}>
              <Grid item xs={6}>
                <Paper sx={{ padding: 4 }}>
                  <Stack alignItems={"center"}>
                    <ThumbUpAltRoundedIcon />
                    <Typography variant='h6'>YES</Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ padding: 4 }}>
                  <Stack alignItems={"center"}>
                    <ThumbDownAltRoundedIcon />
                    <Typography variant='h6'>NO</Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <CustomTextField InputProps={{ sx: { height: 60, background: "white" } }} type={"number"} placeholder={"0.00"}></CustomTextField>
                <CustomButtonPurple fullWidth sx={{ height: 50, marginTop: 3 }}>
                  Vote
                </CustomButtonPurple>
              </Grid>
            </Grid>


          </Stack>
        </Paper>
      </Grid>
    </Dialog >
  );
}

export default Vote;
