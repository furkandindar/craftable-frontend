import { Box, FormControlLabel, Paper, Radio, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import CustomTextField from '../../components/CustomTextField';


const CreateChest = () => {
    return (
        <Grid container direction="row" spacing={3}>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Collection Name</Typography>
                        <Typography>Your chest will appear in this collection. Max 80 chracters long</Typography>
                        <CustomTextField placeholder='Example: Crafted Ship'></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Picture</Typography>
                        <Typography>Your should upload ipfs link</Typography>
                        <CustomTextField></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Amount</Typography>
                        <Typography>Your should describe amount of their chest</Typography>
                        <CustomTextField></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Price</Typography>
                        <Typography>Your should describe amount of their chest</Typography>
                        <CustomTextField></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Start Date&Time</Typography>
                        <Typography>Your should describe amount of their chest</Typography>
                        <CustomTextField></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Max Limit Per User</Typography>
                        <Typography>Your should describe amount of their chest</Typography>
                        <CustomTextField></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Base Elements</Typography>
                        <Typography variant='h6'>Name</Typography>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                        </Grid>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Base Elements</Typography>
                        <Typography variant='h6'>Name</Typography>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                            <Grid item xs={2}>
                                <CustomTextField></CustomTextField>
                            </Grid>
                        </Grid>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Base Elements</Typography>
                        <Typography variant='h6'>Name</Typography>
                        <Grid container justifyContent={"center"} direction="row" spacing={2}>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                            <Grid item xs={1.3}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </Grid>
                        </Grid>
                    </Stack>
                </Paper>
            </Grid>
        </Grid >
    );
};

export default CreateChest;
