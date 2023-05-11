import cl from './Banner1.module.sass';
import recycling from '../../../../../assets/Slider/recycle.png';
import { Button } from '../Buttons/Button';

export const Banner1 = () => {
	return (
		<div className={cl.banner}>
			<div className={cl.leftPart}>
				<div className={cl.text}>
					<div className={cl.title}>
						Сделаем мир чище
					</div>
					<div className={cl.subTitle}>
						Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов
					</div>
				</div>
				<Button>
					Условия сервиса
				</Button>
			</div>
			<img className={cl.img} src={recycling} alt="recycling" />
		</div>
	)
}
