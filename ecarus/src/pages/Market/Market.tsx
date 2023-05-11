import { MarketFilter } from '../../components/UI/Market/marketFilter/MarketFilter';
import { MarketItemList } from '../../components/UI/Market/marketItemList/MarketItemList';
import { MarketSidebar } from '../../components/UI/Market/MarketSidebar/MarketSidebar';
import cn from './Market.module.sass';

export const Market = () => {

	return (
		<div className={cn.market}>
			<div className="container">
				<div className={cn.market__header}>
					<h2>ЭкоМаркет</h2>
					<div className={cn.market__filter_buttons}>
						<MarketFilter text="По популярности" />
						<MarketFilter text="По цене" />
						<MarketFilter text="По новизне" />
					</div>
				</div>
				<div className={cn.market__body}>
					<MarketSidebar />
					<MarketItemList />
				</div>
			</div>

		</div>
	)
}

