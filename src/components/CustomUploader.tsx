import { Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import ImageIcon from '@mui/icons-material/Image';

function CustomUploader() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <Paper sx={{ padding: 4 }}>
                        <Grid container justifyContent="center">
                            <Stack>
                                <ImageIcon color={'disabled'} sx={{ fontSize: 120 }} />
                                <Typography>Drop here</Typography>
                            </Stack>

                        </Grid>
                    </Paper>
                    :
                    <>
                        <Paper sx={{ padding: 4 }}>
                            <Grid container justifyContent="center">
                                <ImageIcon color={'disabled'} sx={{ fontSize: 120 }} />
                            </Grid>
                        </Paper>
                    </>

            }
        </div>
    )
}
export default CustomUploader;