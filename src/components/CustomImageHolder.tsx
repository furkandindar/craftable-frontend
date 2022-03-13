import { Box } from '@mui/material'
import React from 'react'

interface ImgProps{
    width: number,
    height: number,
    imgUrl: string,
    alt: string,
}

const CustomImageHolder = (props: ImgProps) => {
  return (
    <Box height={props.height} width={props.width}>
        <img height={props.height} width={props.width} style={{borderRadius:"50%"}} src={props.imgUrl} alt={props.alt}></img>
    </Box>
  )
}

export default CustomImageHolder