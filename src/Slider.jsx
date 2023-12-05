import PropTypes from 'prop-types'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import slide_1 from './assets/images/family-travel.jpg';
import slide_2 from './assets/images/Honeymoon-Places-in-December-in-India.jpg';
import slide_3 from './assets/images/vertikal-zipline-cusco.jpg';
import slide_4 from './assets/images/nsplsh_747442337a396244694851_mv2_d_4480_6720_s_4_2.webp';
import slide_5 from './assets/images/محافظة_حماة_في_سوريا.jpg';
// import required modules
import { Autoplay, Controller, EffectFade, Pagination } from 'swiper/modules';
import { useState } from 'react';

const slides = [slide_1, slide_2, slide_3, slide_4, slide_5]
function Slider({ className }) {
  const [contrledSwiper, setControlledSwiper] = useState(null)
  return (
    <div className={'Slider relative h-[20rem] md:h-[30rem] ' + className} >
      <div className="backgroundImage blur-[2px] h-full">
        <div
          className=' w-full h-full absolute top-0 left-0 bg-gradient-to-b 
          from-transparent from-70% to-white z-10'
        >
        </div>
        <Swiper
          effect={'fade'}
          modules={[EffectFade, Controller]}
          onSwiper={setControlledSwiper}
          className="myNestedSwiper h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <img
                className=' object-cover object-center w-full h-full'
                src={slide}
                alt="family travel" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute rounded-2xl w-4/5 max-w-5xl h-3/5 overflow-hidden top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 5000
          }}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          controller={{
            control: contrledSwiper
          }}
          dir={{
            
          }}
          modules={[EffectFade, Controller,Autoplay, Pagination]}
          className="mySwiper subSlider h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide 
            key={i}
            className=' aspect-video'
            >
              <img
                className=' object-cover h-full w-full'
                src={slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

Slider.propTypes = {
  className: PropTypes.string
}

export default Slider
