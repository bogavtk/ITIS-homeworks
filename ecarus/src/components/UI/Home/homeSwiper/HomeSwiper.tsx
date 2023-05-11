import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from './HomeSwiper.module.sass';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

export const HomeSwiper: React.FC = () => {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={10}
			centeredSlides={true}
			navigation={true}
			loop={true}
		>
			<SwiperSlide>
				<img src="" alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<div>Item 2</div>
			</SwiperSlide>
			<SwiperSlide>
				<div>Item 3</div>
			</SwiperSlide>
			<SwiperSlide>
				<div>Item 4</div>
			</SwiperSlide>
			<SwiperSlide>
				<div>Item 5</div>
			</SwiperSlide>
		</Swiper>
	)
}
