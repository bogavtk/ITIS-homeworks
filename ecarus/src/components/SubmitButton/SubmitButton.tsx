import React from 'react';

interface IButton {
	onClick: () => void;
	text: string;
};

export const SubmitButton: React.FC<IButton> = (props) => {
	const { onClick, text } = props;
	return (
		<div>
			{props.text}
		</div>
	)
}

export default SubmitButton
