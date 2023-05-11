import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from './HomeSwiper.module.sass';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Banner1 } from '../Banners/Banner1/Banner1';
import { Banner2 } from '../Banners/Banner2/Banner2';
import { Banner3 } from '../Banners/Banner3/Banner3';

SwiperCore.use([Pagination, Navigation]);

export const HomeSwiper: React.FC = () => {
	return (
		<div className={cl.main_wrapper}>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				centeredSlides={true}
				navigation={false}
				loop={true}
			>
				<SwiperSlide>
					<Banner1 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner2 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner3 />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
