import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import { AvaxIcon } from '../assets/icons';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Box from '@mui/system/Box';
import { getNfts } from '../shared/fakeData';
import { useNavigate } from 'react-router-dom';

const NftCard = () => {
    const [bookmarked, setBookmarked] = useState(false);
    const [bookmarkCount, setBookmarkCount] = useState(2);
    let nfts = getNfts();
    let navigate = useNavigate();

    const handleBookmarkClick = () => {
        setBookmarked(!bookmarked);
        bookmarked ? setBookmarkCount(bookmarkCount-1) : setBookmarkCount(bookmarkCount+1);
        console.log(bookmarked);
    }

    const handleCardClick = () => {
        navigate(`/marketplace/${nfts[0].nftId}`)
    }
  return (
    <Card sx={{ maxWidth: 345, "&:hover":{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}} onClick={handleCardClick}>
        <CardMedia
        component="img"
        image={nfts[0].nftImage}
        alt={nfts[0].nftId}
        />
        <CardContent sx={{padding:"0.875rem"}}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography gutterBottom>{nfts[0].nftId}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} paddingTop={2}>
                    <Typography gutterBottom variant='body2' color="gray">Fixed Price</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" alignItems="center" spacing={0.25}>
                            <AvaxIcon/>
                            <Typography variant='body1' fontWeight="bold">{nfts[0].nftCoinPrice}</Typography>
                            <Typography variant='body2'>{nfts[0].coin}</Typography>
                        </Stack>
                        <Typography variant='body2' color="#707070">${nfts[0].nftDollarPrice}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" paddingTop={4}>
                        <Stack direction="row" alignItems="center" spacing={0.25}>
                            <AvaxIcon/>
                            <Typography variant='body2' color="#707070">{nfts[0].collectionId}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={0.50}>
                        <Typography variant='body2' color="#707070">{bookmarkCount}</Typography>
                        {bookmarked ? <BookmarkIcon sx={{color:"primary.main"}} onClick={handleBookmarkClick} fontSize='small'/> : <BookmarkBorderIcon onClick={handleBookmarkClick} fontSize='small'/>}
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
};

export default NftCard;
