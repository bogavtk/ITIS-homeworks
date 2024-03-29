import { FC } from 'react';

interface IconProps {
	width: number;
	height: number;
	fill: string;
	fillOpacity: number;
}

export const CrossIcon: FC<IconProps> = (props) => {

	const { width, height, fill, fillOpacity } = props;
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 1.70717C18.0976 1.31664 18.0976 0.683479 17.7071 0.292954C17.3166 -0.0975701 16.6834 -0.09757 16.2929 0.292954L9 7.58585L1.70711 0.292954C1.31658 -0.09757 0.683417 -0.09757 0.292893 0.292954C-0.0976311 0.683479 -0.0976311 1.31664 0.292893 1.70717L7.58579 9.00006L0.292894 16.293C-0.0976301 16.6835 -0.0976301 17.3166 0.292894 17.7072C0.683419 18.0977 1.31658 18.0977 1.70711 17.7072L9 10.4143L16.2929 17.7072C16.6834 18.0977 17.3166 18.0977 17.7071 17.7072C18.0976 17.3166 18.0976 16.6835 17.7071 16.293L10.4142 9.00006L17.7071 1.70717Z" fill="#000B26" fill-opacity="0.72" />
		</svg>


	);
};
