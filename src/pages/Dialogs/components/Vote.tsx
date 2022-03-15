import { Box, Dialog, IconButton, Paper, Stack, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CustomButtonPurple, CustomVoteButton } from '../../../components/CustomButtons';
import CustomTextField from '../../../components/CustomTextField';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
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
            <Typography variant='h5' gutterBottom>Vote</Typography>
            <Paper elevation={0} sx={{backgroundColor:"primary.main", color:"white", border:"1px solid white",p:2}}>
            <Typography align='center' sx={{ fontSize: 13}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Typography>
            </Paper>

            <Grid container justifyContent={"center"} direction="row" spacing={2}>
              <Grid item xs={6}>
                <CustomVoteButton disableRipple fullWidth sx={{height:"100%", py:3}}>
                  <Stack alignItems={"center"}>
                    <ThumbUpOutlinedIcon/>
                    <Typography variant='h6' fontWeight={400}>YES</Typography>
                  </Stack>
                </CustomVoteButton>
              </Grid>
              <Grid item xs={6}>
                <CustomVoteButton disableRipple fullWidth sx={{height:"100%", py:3}}>
                <Stack alignItems={"center"}>
                    <ThumbDownOutlinedIcon/>
                    <Typography variant='h6' fontWeight={400}>NO</Typography>
                  </Stack>
                </CustomVoteButton>
              </Grid>
              <Grid item container xs={12}>
                <Grid item container>
                  <CustomButtonPurple disableRipple fullWidth sx={{ marginTop: 3 }}>
                    Submit
                  </CustomButtonPurple>
                </Grid>
              </Grid>
            </Grid>


          </Stack>
        </Paper>
      </Grid>
    </Dialog >
  );
}

export default Vote;
