import React, { ReactNode } from 'react'
import cl from './Button.module.sass'

import cn from 'classnames/bind'
const cx = cn.bind(cl)


interface Props {
	children: ReactNode;
}

export const Button = ({ children }: Props) => {
	return (
		<button className={cx(cl.button)}>
			{children}
		</button>
	)
}
