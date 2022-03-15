import { Avatar, Grid, Stack, Typography } from '@mui/material';

const ProposalItem = () => {
    return (
        <Grid container direction={"row"}>
            <Grid item xs={4}>
                <Avatar  sx={{ width: 60, height: 60 }} />
            </Grid>
            <Grid item xs={8}>
                <Stack>
                    <Typography>test</Typography>
                    <Typography>test</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ProposalItem;
