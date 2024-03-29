import React from 'react';
import cl from './SubmitButton.module.sass';

interface IButton {
	onClick: () => void;
	text: string;
};

export const SubmitButton: React.FC<IButton> = (props) => {

	return (
		<button className={cl.enter_button} onClick={props.onClick}>
			{props.text}
		</button>
	)
}
