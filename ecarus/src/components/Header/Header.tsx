import React from 'react';
import Logo from '../../assets/Logo.png';
import cl from './Header.module.sass';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BiMap } from 'react-icons/bi';
import Points from '../../assets/icons/PointsImg.png';
import { LoginModule } from '../LoginModule/LoginModule';

type Props = {
	pathname: string;
}

export const Header: React.FC<Props> = ({ pathname }) => {

	return (
		<header className={cl.header}>
			<div className={classNames(cl.container, cl.header__wrap)}>
				<div className={cl.header__left}>
					<div className={cl.header__logo}>
						<img src={Logo} alt="" />
					</div>
					<nav className={cl.header__nav}>
						<ul>
							{/* <li className={`cl.active-link ${pathname === '/' ? 'active' : ''}`}> */}
							<li className={classNames(cl.active_link, pathname === '/' ? cl.active : null)}>
								<Link to="/">Главная</Link>
							</li>
							<li className={classNames(cl.active_link, pathname === '/points' ? cl.active : null)}>
								<Link to="/points">Пункты сбора</Link>
							</li>
							<li className={classNames(cl.active_link, pathname === '/market' ? cl.active : null)}>
								<Link to="/market">ЭкоМаркет</Link>
							</li>
							<li className={classNames(cl.active_link, pathname === '/service' ? cl.active : null)}>
								<Link to="/service">О сервисе</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className={cl.header__right}>
					{localStorage.getItem('auth_token') ? <>
						<div className={cl.header__right__location}>
							<BiMap className={cl.header__right__icon} />
							<p>Kazan</p>
						</div>
						<div className={cl.header__right__points}>
							<img src={Points} alt="" />
							<p>1000</p>
						</div>
						<div className={cl.header__right__user}>
							<div className={cl.header__right__user__avatar}> </div>
							<p>Алексей</p>
						</div>
					</> : <LoginModule />}

				</div>
			</div >
		</header >
	)
}

