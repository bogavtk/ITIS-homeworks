import cl from './Block.module.sass';
import cn from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Icon } from '../../../Icon/Icon';

const cx = cn.bind(cl)

interface Props {
	title: string,
	subTitle: string,
	img: string
	typeImg: 'leftImg' | 'rightImg'
	linkTo: string
}

export const Block = ({ title, subTitle, img, typeImg, linkTo }: Props) => {

	return (
		<div className={cl.item1}>
			<div className={cl.leftPartItem}>
				<div className={cl.itemText}>
					<div className={cl.itemTitle}>
						{title}
					</div>
					<div className={cl.itemSubTitle}>
						{subTitle}
					</div>
				</div>
				<Link to={linkTo}>
					<button className={cl.itemButton}>
						<Icon icon={'arrow'} />
					</button>
				</Link>

			</div>
			<img
				src={img}
				alt=""
				className={cx({
					leftImg: typeImg === 'leftImg',
					rightImg: typeImg === 'rightImg',
				})}
			/>
		</div>
	)
}
