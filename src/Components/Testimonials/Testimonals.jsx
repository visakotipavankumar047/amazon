import React from 'react';
import css from "../Testimonials/Testimonals.module.css";
import Hero from "../../assets/testimonialHero.png";
import {Swiper} from "swiper/react";
import { SwiperSlide } from 'swiper/react';
import {TestimonialsData} from "../../data/testimonials";

const Testimonals = () => {
  return (
    <div className={css.Testimonals}>
        <div className={css.wrapper}>
            <div className={css.container}>
            <span>Top rated</span><span>Seedily boy has suitable disposal and boy. 
                Exercise joy man children rejoined</span>
            </div>

            <img src={Hero} alt="" />

            <div className={css.container}>
                <span>100K</span>
                <span>Happy Customers with us</span>
            </div>
            
        </div>
        <div className={css.reviews}>Reviews</div>
        <div className={css.carosal}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            >
                {
                    TestimonialsData.map((testimonals , i)=> (
                        <SwiperSlide>
                            <div className={css.testimonal}>
                                <img src={testimonals.image} alt="" />
                                <span>{testimonals.comment}</span>
                                <hr/>
                                <span>{testimonals.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

        
    </div>
  );
}

export default Testimonals;
