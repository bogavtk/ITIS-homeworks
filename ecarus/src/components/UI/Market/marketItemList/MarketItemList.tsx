import React from 'react';
import { MarketItem } from '../marketitem/MarketItem';
import cn from './MarketItemList.module.sass';

export const MarketItemList = () => {
	const text: string = "Item"
	return (
		<div className={cn.marketItems}>
			<MarketItem text={text} />
			<MarketItem text={text} />
			<MarketItem text={text} />
			<MarketItem text={text} />
		</div>
	)
}