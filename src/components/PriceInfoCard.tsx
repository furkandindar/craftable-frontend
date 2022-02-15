import Grid from "@mui/material/Grid";
import { Box, Paper, Stack, Typography } from "@mui/material";

const PriceInfoCard = () => {
  return (
        <Paper>
            <Grid paddingY={1} paddingX={8} container justifyContent="space-between" alignItems="center">
                <Grid item>
                <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{width:"60px",height:"60px",background:"red",borderRadius:50}}>
                <img width="100%" height="100%" style={{borderRadius:50}} src={require('../assets/profile_pic.png')}/>
                </Box>
                <Typography>$31.00</Typography>
                </Stack>
                </Grid>
                <Grid item>
                <Typography noWrap>#3205</Typography>
                </Grid>
                <Grid item>
                <Typography color="#bf3755">@pbar25</Typography>
                </Grid>
            </Grid>
        </Paper>
  )
}

export default PriceInfoCard