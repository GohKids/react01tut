import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import './Slide.css';


const Slide = () => {
  const newDataSlide = [];
  for (let i = 0; i < 4; i++) {
    const element = 'https://picsum.photos/id/'+ 105 + i +'/1920/500';
    newDataSlide.push(element);
  }
  return (
    <div>
      <Swiper 
        modules={[Navigation,Keyboard]}
        navigation={true}
        keyboard={true}
      >
        {newDataSlide.map((ele, index) => <SwiperSlide key={index}><img src={ele} /></SwiperSlide>)}
      </Swiper>
    </div>
  )
};

export default Slide;
