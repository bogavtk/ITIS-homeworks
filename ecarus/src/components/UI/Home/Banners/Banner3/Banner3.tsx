import React from 'react'
import cl from '../Banner3/Banner3.module.sass'
import { Button } from '../Buttons/Button';
import recycling3 from '../../../../../assets/Slider/recycle-3.png';

export const Banner3 = () => {
	return (
		<div className={cl.banner}>
			<div className={cl.leftPart}>
				<div className={cl.text}>
					<div className={cl.title}>
						Что с масками?
					</div>
					<div className={cl.subTitle}>
						Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.
					</div>
					<Button>
						Пункты сбора масок
					</Button>
				</div>
			</div>
			<img className={cl.img} src={recycling3} alt="recycling" />
		</div>
	)
}
