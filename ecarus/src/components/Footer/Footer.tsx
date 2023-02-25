import React from 'react';
import './Footer.sass';
import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-wrap container">
				<div className="footer__item">
					<CiMail className='footer__icon' />
					<span>info@ecorus.ru</span>
				</div>
				<div className="footer__item">
					<BsTelephone className='footer__icon' />
					<span>+7 (800) 880-88-88</span>
				</div>
			</div>
		</footer>
	)
}

