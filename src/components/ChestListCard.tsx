import { Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary, CustomButtonSecondary } from './CustomButtons'
import CustomImageHolder from './CustomImageHolder'

const ChestListCard = () => {
  return (
    <Paper>
        <Grid container paddingX={6} paddingY={3} justifyContent="space-between" alignItems={"center"}>
            <Grid item>
                <Stack direction="row" spacing={2} alignItems="center">
                    <CustomImageHolder width={60} height={60} imgUrl="https://lh3.googleusercontent.com/9WkSu8CP7gZjaEmUy8cpaKG3mK6ScHeEDvQf8driDoRxuxy4GPAs_W_Dn_DQascQSGDkdUL4cjmsnRrL6xN-NDp-s_RNwN5pxiCo=w600" alt={"chest"}/>
                    <Typography fontWeight={600}>Chest Name #1</Typography>
                </Stack>
            </Grid>
            <Grid item>
                <Stack direction="row" spacing={2}>
                    <Typography>Price</Typography>
                    <Typography fontWeight={600}>100 Craft</Typography>
                </Stack>
            </Grid>
            <Grid item>
            <   Stack direction="row" spacing={2}>
                    <Typography>Total Amount</Typography>
                    <Typography fontWeight={600}>10,000</Typography>
                </Stack>
            </Grid>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item>
                        <CustomButtonPrimary disableRipple>Buy</CustomButtonPrimary>
                    </Grid>
                    <Grid item>
                        <CustomButtonSecondary disableRipple>Review</CustomButtonSecondary>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default ChestListCard