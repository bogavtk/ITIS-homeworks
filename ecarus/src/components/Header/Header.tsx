import React from 'react';
import Logo from '../../assets/Logo.png';
import './Header.sass';
import { Link } from 'react-router-dom';
import { BiMap } from 'react-icons/bi';
import Points from '../../assets/icons/PointsImg.png';

type Props = {
	pathname: string;
}

export const Header: React.FC<Props> = ({ pathname }) => {

	return (
		<header className="header">
			<div className='container header__wrap'>
				<div className="header__left">
					<div className="header__logo">
						<img src={Logo} alt="" />
					</div>
					<nav className="header__nav">
						<ul>
							<li className={`active-link ${pathname === '/' ? 'active' : ''}`}>
								<Link to="/">Главная</Link>
							</li>
							<li className={`active-link ${pathname === '/points' ? 'active' : ''}`}>
								<Link to="/points">Пункты сбора</Link>
							</li>
							<li className={`active-link ${pathname === '/market' ? 'active' : ''}`}>
								<Link to="/market">ЭкоМаркет</Link>
							</li>
							<li className={`active-link ${pathname === '/service' ? 'active' : ''}`}>
								<Link to="/service">О сервисе</Link>
							</li>

						</ul>
					</nav>
				</div>
				<div className="header__right">
					<div className="header__right__location">
						<BiMap className='header__right__icon' />
						<p>Kazan</p>
					</div>
					<div className="header__right__points">
						<img src={Points} alt="" />
						<p>1000</p>
					</div>
					<div className="header__right__user">
						<div className="header__right__user__avatar"> </div>
						<p>Алексей</p>
					</div>
				</div>
			</div>
		</header>
	)
}

