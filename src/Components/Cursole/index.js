import React from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './cursole.css';

const Cursole = (props) => {
    const cardsData = props.carddata;
    
  console.log( cardsData );

  if (!cardsData || !Array.isArray(cardsData)) {
    // Handle the case when cardsData is undefined or not an array
    return <p>No data available</p>;
  }

  return (
    <div className='cursole'>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={7}
        spaceBetween={30}
        
        navigation={{ nextEl: `.arrow-right`, prevEl: ".arrow-left" }}
        virtual
      >
        {cardsData.map((carddata) => (
          <SwiperSlide key={carddata.id}>
            <div className='card-wrapper'>
              <div className='card'>
                <div className='card-image-frame'>
                  <img src={carddata.image} alt='album cover page' />
                </div>
                <div className='card-pill'>
                  <p>{carddata.follows} Follows</p>
                </div>
              </div>
              <p className='card-label'>{carddata.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="arrow-left arrow"><img src='left.png'/></div>
      <div className="arrow-right arrow"><img src='right.png'/></div>
    </div>
  );
};

export default Cursole;
