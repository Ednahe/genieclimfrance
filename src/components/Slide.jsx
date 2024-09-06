import React from "react";
import corpo1 from '../images/corpo1.jpg';
import corpo2 from '../images/corpo2.jpg';
import corpo3 from '../images/corpo3.jpg';
import corpo4 from '../images/corpo4.jpg';
import corpo5 from '../images/corpo5.jpg';
import arrowLeft from '../images/angle-left.svg';
import arrowRight from '../images/angle-right.svg';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slide = () => {

    return <>
    <div className="container-slide">
        <h1 className="title-slider">Voici le slider</h1>
        <p className="p-slider"></p>
        <Swiper 
        effect={ "coverflow" } 
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={ 'auto' }
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        }}
        pagination={{ el:'.swiper-pagination', clickable:true, }}
        navigation={{
            nextEl:'.right',
            prevEl:'.left',
            clickable: true,

        }}
        modules={[ EffectCoverflow, Pagination, Navigation ]}
        className="slider">
            <SwiperSlide>
                <img src={corpo1} alt="image de la slide" className="img-slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={corpo2} alt="image de la slide" className="img-slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={corpo3} alt="image de la slide" className="img-slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={corpo4} alt="image de la slide" className="img-slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={corpo5} alt="image de la slide" className="img-slide"/>
            </SwiperSlide>
            <div className="slider-controler">
                <div className="left swiper-button">
                    <img src={arrowLeft} className="arrow-slider" />
                </div>
                <div className="right swiper-button">
                    <img src={arrowRight} className="arrow-slider" />
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    </div>
    </>
}

export default Slide;