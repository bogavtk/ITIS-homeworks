import React from 'react';
import cn from './MarketItem.module.sass';

interface Props {
	text: string;
}

export const MarketItem: React.FC<Props> = (props) => {
	return (
		<h1>
			{props.text}
		</h1>
	)
}