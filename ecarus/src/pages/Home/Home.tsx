import cl from './Home.module.sass';
import { HomeSwiper } from '../../components/UI/Home/homeSwiper/HomeSwiper';
import block1 from '../../assets/home/block1.svg';
import block2 from '../../assets/home/block2.svg';
import { Block } from '../../components/UI/Home/Blocks/Block';

export const Home = () => {
	return (
		<div className='home'>
			<div className="container home_container">
				<HomeSwiper />
				<div className={cl.items}>
					<Block title='Пункты сбора'
						subTitle='Посмотри, где в твоем городе можно сдать вторсырье на переработку'
						img={block1}
						typeImg='leftImg'
						linkTo='/points'

					/>
					<Block title='ЭкоМаркет'
						subTitle='Используй заработанные экокоины для покупки товаров из переработанных материалов'
						img={block2}
						typeImg='rightImg'
						linkTo='/market'
					/>
				</div>
			</div>
		</div>
	)
}
