import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { createSvgIcon } from '@mui/material/utils';

const BlackAvaxIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.55 11.55">
  <path id="Path_101" data-name="Path 101" d="M12.05,6.775c0,1.71-2.16,4.5-2.16,4.5A9.332,9.332,0,0,1,6.275,12.55,5.775,5.775,0,1,1,12.05,6.775Zm-7.411,2.3H3.518a.9.9,0,0,1-.423-.045.285.285,0,0,1-.129-.223c0-.084.054-.186.17-.39L5.9,3.537c.118-.207.177-.311.253-.349a.286.286,0,0,1,.258,0c.075.038.135.142.253.349l.569.993,0,.005a1.863,1.863,0,0,1,.22.453.842.842,0,0,1,0,.394,1.87,1.87,0,0,1-.221.458L5.783,8.411l0,.007A1.843,1.843,0,0,1,5.5,8.84a.846.846,0,0,1-.345.2A2.028,2.028,0,0,1,4.639,9.073Zm2.83,0H9.075A.893.893,0,0,0,9.5,9.026.284.284,0,0,0,9.631,8.8c0-.081-.053-.179-.164-.372l-.012-.02-.8-1.376-.009-.015c-.113-.191-.17-.288-.243-.325a.282.282,0,0,0-.257,0c-.074.038-.133.139-.251.342l-.8,1.376,0,0c-.117.2-.176.3-.172.387a.287.287,0,0,0,.129.224A.907.907,0,0,0,7.469,9.073Z" transform="translate(-0.5 -1)" fill-rule="evenodd"/>
</svg>,
  'BlackAvax',
);

const AvaxIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.121 20.121">
  <path id="Path_101" data-name="Path 101" d="M20.621,11.06A10.06,10.06,0,1,1,10.56,1,10.06,10.06,0,0,1,20.621,11.06Zm-12.911,4H5.757a1.568,1.568,0,0,1-.736-.079A.5.5,0,0,1,4.8,14.6c-.007-.146.094-.324.3-.68l4.821-8.5c.205-.361.309-.541.44-.608a.5.5,0,0,1,.45,0c.131.067.235.247.44.608l.991,1.73.005.009a3.245,3.245,0,0,1,.383.789,1.468,1.468,0,0,1,0,.687,3.257,3.257,0,0,1-.386.8L9.7,13.91l-.007.011a3.211,3.211,0,0,1-.493.737,1.474,1.474,0,0,1-.6.349A3.532,3.532,0,0,1,7.71,15.064Zm4.931,0h2.8a1.556,1.556,0,0,0,.744-.081.5.5,0,0,0,.225-.39c.007-.141-.092-.312-.286-.647l-.02-.035-1.4-2.4-.016-.027c-.2-.333-.3-.5-.424-.566a.492.492,0,0,0-.447,0c-.129.067-.232.242-.437.6l-1.4,2.4,0,.008c-.2.353-.307.529-.3.674a.5.5,0,0,0,.225.39A1.581,1.581,0,0,0,12.64,15.064Z" transform="translate(-0.5 -1)" fill="#e84142" fill-rule="evenodd"/>
</svg>,
  'Avax',
);

const MiniNftCard = () => {
  return (
    <Card sx={{ maxWidth: 200, height:230 }} variant="outlined">
    <CardActions disableSpacing sx={{paddingY:0, paddingX:"2px", justifyContent:"flex-end", alignItems:"flex-start"}}>
      <Stack direction='row' spacing={0}>
        <IconButton size='small' sx={{padding:0}}>
          <FavoriteBorderOutlinedIcon sx={{fontSize:"15px"}}/>
        </IconButton>
        <IconButton size='small'>
          <GradeOutlinedIcon sx={{fontSize:"15px"}}/>
        </IconButton>
      </Stack>
    </CardActions>
    {/* <CardMedia
      component="img"
      alt="green iguana"
      image="/static/images/cards/contemplative-reptile.jpg"
    /> */}
    <CardMedia
        component="img"
        height="140px"
        image={require("../assets/mainCardPlaceholder.jpeg")}
        alt="NFT"
        sx={{paddingX:"5px"}}
      />
    <CardContent sx={{paddingX:"5px", paddingY:"0.75rem"}}>
      <Stack direction="column">
        <Typography sx={{fontSize:"0.65rem"}}  color="text.secondary">username</Typography>
        <Typography sx={{fontSize:"0.60rem"}}>#1245</Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" sx={{fontWeight:"bold"}}>6.5 <BlackAvaxIcon sx={{width:"8px", height:"8px"}}/>
        </Typography>
        <AvaxIcon sx={{width:"0.875rem",height:"0.875rem"}}/>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
  );
};

export default MiniNftCard;
