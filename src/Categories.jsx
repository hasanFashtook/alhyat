import PropTypes from 'prop-types'
// Core modules imports are same as usual
import { EffectCoverflow, Autoplay } from 'swiper/modules';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useTranslation } from 'react-i18next';


function Categories({ className }) {
  const {t} = useTranslation();

  return (
    <div className={'Categories ' + className} >
      <div className="container">
        <h1>{t('categories')}</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 500,
            depth: 100,
            // modifier: 1,
            slideShadows: true,
            scale: 0.9,
          }}
          loop={true}
          speed={1500}
          breakpoints={{
            350: {
              coverflowEffect: {
                stretch: 600
              }
            },
            768: {
              coverflowEffect: {
                stretch: 800
              }
            },
            992: {
              coverflowEffect: {
                stretch: 850
              }
            }
          }}
          pagination={true}
          autoplay={{
            delay: 3000,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper my-10">
          {images.map((el, i) => (
            <SwiperSlide
              key={i}
              className=' w-72 md:w-96 '
            >
              <div className=' h-40 rounded-3xl overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src={el} alt="" />
              </div>
              <p className=' text-xl text-left px-6 font-extrabold 
              text-black mt-2'>رحلات جوية</p>
            </SwiperSlide>
          )
          )}
        </Swiper>
      </div>
    </div>
  )
}

Categories.propTypes = {
  className: PropTypes.string
}

export default Categories



const images = [
  "/src/assets/images/Honeymoon-Places-in-December-in-India.jpg",
  "/src/assets/images/Honeymoon-Places-in-December-in-India.jpg",
  "/src/assets/images/Honeymoon-Places-in-December-in-India.jpg",
  "/src/assets/images/Honeymoon-Places-in-December-in-India.jpg",
  "/src/assets/images/Honeymoon-Places-in-December-in-India.jpg",
]