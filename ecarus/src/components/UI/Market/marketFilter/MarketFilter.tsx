import React, { useState } from 'react'
import cn from '../../../../pages/Market/Market.module.sass';

type Props = {
	text: string;
}

export const MarketFilter: React.FC<Props> = (props) => {
	const [activeFilter, setActiveFilter] = useState(false);
	return (
		<div className={cn.market__filter} onClick={() => setActiveFilter(true)}>
			{props.text}
		</div>
	)
}
