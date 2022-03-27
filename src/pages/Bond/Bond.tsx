import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import MiniNftCard from '../../components/MiniNftCard';

const Bond = () => {
    return (
        <Grid container spacing={1}>
            {/* <Grid item container justifyContent={"center"}>
                <Grid item xs={4} md={2}>
                    <img width={"100%"} src='../../craftableLogo1K.png'/>
                </Grid>
            </Grid>
            <Grid item container direction={"column"}>
                <Grid item>
                    <Typography align='center' fontWeight={500} sx={{
                        background: "linear-gradient(to left,#BF3755,#82368C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }} variant='h4'>Something's brewing</Typography>
                </Grid>
                <Grid item>
                    <Typography align='center' gutterBottom fontWeight={500} sx={{
                        lineHeight:"1.5",
                        background: "linear-gradient(to right,#BF3755,#82368C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }} variant='h2'>Bond is coming soon!</Typography>
                </Grid>
            </Grid> */}
            <Grid item xs={12} sx={{backgroundColor:"red"}}>
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              >
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <MiniNftCard/>
                  </SwiperSlide>
              </Swiper>
            </Grid>
        </Grid>
    );
};

export default Bond;
