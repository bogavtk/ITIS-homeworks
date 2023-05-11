import React from 'react';
import { HomeSwiper } from '../../components/UI/Home/homeSwiper/HomeSwiper';
import { LoginModule } from '../../components/LoginModule/LoginModule';

export const Home = () => {
	return (
		<div className='home'>
			<div className="container">
				<HomeSwiper />
			</div>
		</div>
	)
}
