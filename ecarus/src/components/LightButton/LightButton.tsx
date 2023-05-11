import React from 'react';
import cl from './LightButton.module.sass';

interface IButton {
	onClick: () => void;
	text: string;
};

export const LightButton: React.FC<IButton> = (props) => {

	return (
		<button className={cl.enter_button} onClick={props.onClick}>
			{props.text}
		</button>
	)
}
