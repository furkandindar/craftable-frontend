import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MiniNftCard from '../../../components/MiniNftCard';
import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./homePageCarouselStyle.css";

import { Pagination, Navigation } from "swiper";

const RecentlyListedSection = () => {
    
  return (
      <Grid container>
          <Grid item xs={12}>
            <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Recently Listed</Typography>
          </Grid>
          <Grid pt={5} item container xs={12}>
              <Grid item container xs={12} justifyContent={"space-evenly"}>
                    <Grid item container alignItems={"center"} xs={0.5}>
                        <div className='swiper-button-prev customPrev' style={{position:"static", zIndex:20}}/>
                    </Grid>
                    <Grid item container md={11} xs={6} justifyContent={"center"}>
                        <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        spaceBetween={10}
                        pagination={{
                            el: '.my-custom-pagination-div',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.customNext',
                            prevEl: '.customPrev',
                        }}
                        breakpoints={{
                            600:{
                                slidesPerView:2,
                                slidesPerGroup:2
                            },
                            900:{
                                slidesPerView:4,
                                slidesPerGroup:4
                            },
                            1200:{
                                slidesPerView:6,
                                slidesPerGroup:6
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        >
                            {_.times(30,i => (
                                <SwiperSlide key={i}>
                                    <MiniNftCard key={i}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Grid>
                    <Grid item container justifyContent={"flex-end"} alignItems={"center"} xs={0.5}>
                        <div className='swiper-button-next customNext' style={{position:"static", zIndex:15}}/>
                    </Grid>
                </Grid>
              <Grid item container xs={12} pt={0.75}>
                <div className="my-custom-pagination-div" />
              </Grid>
          </Grid>
      </Grid>
  );
};

export default RecentlyListedSection;
