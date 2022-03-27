import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import resource1 from '../../../assets/resource1.png';

import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./homePageCarouselStyle.css";

import { Pagination, Navigation } from "swiper";

interface ResourceCardProps {
  helpText: string,
  imgUrl: string
}

const ResourceCard = (props: ResourceCardProps) => {
  return (
      <Card sx={{'&:hover':{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;", cursor:"pointer"}, margin:2}}>
          <CardMedia
              component="img"
              alt="green iguana"
              image={props.imgUrl}
          />
          <CardContent sx={{padding:3, '&.MuiCardContent-root:last-child':{paddingBottom:1.5}}}>
              <Typography textAlign="center" variant='body2' component="div">
              {props.helpText}
              </Typography>
          </CardContent>
      </Card>
  );
}

const ResourcesSection = () => {
  return (
    <Grid container direction="column" spacing={5} justifyContent="space-between">
    <Grid item xs={12}>
        <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Resources for getting started</Typography>
    </Grid>
    <Grid item container xs={12}>
        <Grid item container xs={12} justifyContent={"space-evenly"}>
            <Grid item container alignItems={"center"} xs={0.5}>
                <div className='swiper-button-prev customPrevResource' style={{position:"static", zIndex:20}}/>
            </Grid>
            <Grid item container md={11} xs={11} justifyContent={"center"}>
                <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={10}
                pagination={{
                    el: '.my-custom-pagination-div-resource',
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.customNextResource',
                    prevEl: '.customPrevResource',
                }}
                breakpoints={{
                    900:{
                        slidesPerView:3,
                        slidesPerGroup:3
                    },
                }}
                modules={[Pagination, Navigation]}
                >
                    {_.times(9,i => (
                        <SwiperSlide key={i}>
                             <ResourceCard key={i} helpText='It is a long established fact that a reader will be distracted.' imgUrl={resource1}></ResourceCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Grid>
            <Grid item container justifyContent={"flex-end"} alignItems={"center"} xs={0.5}>
                <div className='swiper-button-next customNextResource' style={{position:"static", zIndex:15}}/>
            </Grid>
        </Grid>
      <Grid item container xs={12} pt={0.75}>
        <div className="my-custom-pagination-div-resource" />
      </Grid>

    </Grid>
    </Grid>
  );
};

export default ResourcesSection;
