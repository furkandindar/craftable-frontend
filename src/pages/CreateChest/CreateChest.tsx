import { Box, FormControlLabel, Paper, Radio, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { CustomButtonPrimary } from '../../components/CustomButtons';
import CustomSwitch from '../../components/CustomSwitch';
import CustomTextField from '../../components/CustomTextField';
import CustomUploader from '../../components/CustomUploader';


const CreateChest = () => {
    return (
        <Grid container direction="row" spacing={3}>
            <Grid item xs={12} rowSpacing={3}>
                <Grid container justifyContent={"center"} direction="row" spacing={2}>
                    <Grid item xs={4}>
                        <Stack spacing={1}>
                            <Typography variant='h6'>Logo Image</Typography>
                            <Typography>Recommended size is 300x300 Max 1MB.</Typography>
                            <CustomUploader />
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Stack spacing={1}>
                            <Typography variant='h6'>Banner Image</Typography>
                            <Typography>Recommended size is 1195x150 (PNG,JPEG) Max 3MB.</Typography>
                            <CustomUploader />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
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
                        <Typography variant='h6'>Description</Typography>
                        <Typography>Add a description to your collection. This will appear on the collection page.</Typography>
                        <CustomTextField placeholder='Collection description' multiline rows={5}></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Description</Typography>
                        <Grid container justifyContent={"space-evenly"} direction="row">
                            <Grid item>
                                <FormControlLabel value="Art" control={<Radio />} label="Art" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel value="Collectibles" control={<Radio />} label="Collectibles" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel value="Games" control={<Radio />} label="Games" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel value="Music" control={<Radio />} label="Music" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel value="NSFW" control={<Radio />} label="NSFW" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel value="Sports" control={<Radio />} label="Sports" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel value="Trading Cards" control={<Radio />} label="Trading Cards" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel value="Utility" control={<Radio />} label="Utility" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel value="Video" control={<Radio />} label="Video" />
                            </Grid>
                        </Grid>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>Symbol</Typography>
                        <Typography>Give your collection an easy-to-remember symbol or abbreviation Max 6 charecters long.</Typography>
                        <CustomTextField></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>IPFS Link</Typography>
                        <CustomTextField></CustomTextField>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} rowSpacing={3}>
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={2}>
                        <Grid container direction="row">
                            <Grid item md={11}>
                                <Stack spacing={1}>
                                    <Typography variant='h6'>Hide Collection</Typography>
                                    <Typography>If selected, this collection will be hidden for everyone until the creator decides to reveal it.</Typography>
                                </Stack>
                            </Grid>
                            <Grid item md={1}>
                                <CustomSwitch />
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item md={11}>
                                <Stack spacing={1}>
                                    <Typography variant='h6'>Hide NFTs Ownership</Typography>
                                    <Typography>NFT owners for this collection will be hidden.</Typography>
                                </Stack>
                            </Grid>
                            <Grid item md={1}>
                                <CustomSwitch />
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item md={11}>
                                <Stack spacing={1}>
                                    <Typography variant='h6'>Minter can change NFT metadata</Typography>
                                    <Typography>NFT minter can change NFT metadata, used for NFT games and similar use cases.</Typography>
                                </Stack>
                            </Grid>
                            <Grid item md={1}>
                                <CustomSwitch />
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item md={11}>
                                <Stack spacing={1}>
                                    <Typography variant='h6'>Enable Burn Feature</Typography>
                                    <Typography>NFT owners for this collection have the ability to burn their property.</Typography>
                                </Stack>
                            </Grid>
                            <Grid item md={1}>
                                <CustomSwitch />
                            </Grid>
                        </Grid>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Grid container sx={{justifyContent:{xs:"center", md:"flex-end"}}}>
                    <CustomButtonPrimary disableRipple size='large'>Create Collection</CustomButtonPrimary>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default CreateChest;
