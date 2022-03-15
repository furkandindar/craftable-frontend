import { Paper, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomButtonPrimary, CustomButtonSecondary } from './CustomButtons'
import CustomImageHolder from './CustomImageHolder'

const DectListCard = () => {
  return (
    <Paper>
        <Grid container paddingX={6} paddingY={3} justifyContent="space-between" alignItems={"center"}>
            <Grid item container xs={12} md={3} alignItems={"center"} spacing={1}>
            
                <Grid item xs={12} md={4}>
                    <CustomImageHolder width={60} height={60} imgUrl="https://lh3.googleusercontent.com/9WkSu8CP7gZjaEmUy8cpaKG3mK6ScHeEDvQf8driDoRxuxy4GPAs_W_Dn_DQascQSGDkdUL4cjmsnRrL6xN-NDp-s_RNwN5pxiCo=w600" alt={"chest"}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography fontWeight={600}>Deck #1</Typography>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} justifyContent="center">
                <Stack direction="row" spacing={2} >
                    <Typography>Owned Amount</Typography>
                    <Typography fontWeight={600}>15/60</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={4} container justifyContent={"flex-end"}>
                <Grid item xs={3}>
                    <CustomButtonPrimary fullWidth>Open</CustomButtonPrimary>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default DectListCard