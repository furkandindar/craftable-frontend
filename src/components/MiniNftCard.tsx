import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import IconButton from '@mui/material/IconButton';
import { BlackAvaxIcon, AvaxIcon } from '../assets/icons';

const MiniNftCard = () => {
  return (
    <Card sx={{ maxWidth: 200, height:230, marginY:1, '&:hover':{boxShadow:5, cursor:"pointer"} }} variant="outlined">
    <CardActions disableSpacing sx={{paddingY:0, paddingX:"2px", justifyContent:"flex-end", alignItems:"flex-start"}}>
      <Stack direction='row' spacing={0}>
        <IconButton disableRipple size='small' sx={{padding:0}}>
          <FavoriteBorderOutlinedIcon sx={{fontSize:"15px"}}/>
        </IconButton>
        <IconButton disableRipple size='small'>
          <GradeOutlinedIcon sx={{fontSize:"15px"}}/>
        </IconButton>
      </Stack>
    </CardActions>
    <CardMedia
        component="img"
        height="140px"
        image={require("../assets/mainCardPlaceholder.jpeg")}
        alt="NFT"
        sx={{paddingX:"5px", borderRadius:1}}
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
