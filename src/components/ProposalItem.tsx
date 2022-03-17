import { Avatar, Grid, Stack, Typography } from '@mui/material';
import { CustomButtonSecondary } from './CustomButtons';
import CustomImageHolder from './CustomImageHolder';

const ProposalItem = () => {
    return (
        <Grid container direction={"column"} justifyContent={"center"} spacing={2}>
            <Grid item container justifyContent={"center"}>
                <Typography variant='h6'>Active Proposal #17</Typography>
            </Grid>
            <Grid item container justifyContent={"center"} spacing={2} alignItems={"center"}>
                <Grid item container xs={6} justifyContent="flex-end">
                    <CustomImageHolder width={95} height={95} imgUrl="https://lh3.googleusercontent.com/9WkSu8CP7gZjaEmUy8cpaKG3mK6ScHeEDvQf8driDoRxuxy4GPAs_W_Dn_DQascQSGDkdUL4cjmsnRrL6xN-NDp-s_RNwN5pxiCo=w600" alt={"collection"}/>
                </Grid>
                <Grid item container direction={"column"} spacing={2} xs={6}>
                    <Grid item container direction={"column"}>
                        <Typography variant='caption'>Total Deposit</Typography>
                        <Typography variant='body2' fontWeight={500}>25,000 HON</Typography>
                    </Grid>
                    <Grid item container direction={"column"}>
                        <Typography variant='caption'>Claimable Tokens</Typography>
                        <Typography variant='body2' fontWeight={500}>30 HON</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container justifyContent={"center"}>
                <Grid item xs={4}>
                    <CustomButtonSecondary disableRipple fullWidth>Claim</CustomButtonSecondary>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProposalItem;
