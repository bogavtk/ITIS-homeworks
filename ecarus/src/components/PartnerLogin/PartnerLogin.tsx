import React, { useState, CSSProperties } from 'react';
import cl from './PartnerLogin.module.sass';
import Modal from 'react-modal';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import axios from '../../api/axios';
import { LightButton } from '../LightButton/LightButton';
import { CrossIcon } from '../../assets/icons/icons';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');

const SEND_LOGIN = 'login';

export const PartnerLogin: React.FC = () => {

	const overlayStyles: CSSProperties = {
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	};

	const contentStyles: CSSProperties = {
		top: '45%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'white',
		borderRadius: '5px',
		width: '450px',
		padding: '48px',
		overflow: 'none',
		height: '530px',
	};

	const [isOpen, setIsOpen] = useState(false);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleSubmit = async () => {
		try {
			const response = await axios.post(SEND_LOGIN, { login: email, password: password });
			console.log(response?.data);
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<>
			<div className={cl.enter_button_wrap}>
				<button className={cl.enter_button} onClick={() => setIsOpen(true)}>Вход для партнеров</button>
			</div>
			<Modal
				isOpen={isOpen}
				onRequestClose={handleClose}
				style={{ overlay: overlayStyles, content: contentStyles }}
				contentLabel="Login Modal"
			>
				<div className={cl.modal_header}>
					<h2>Вход или Регистрация</h2>
					<button className={cl.button_close} onClick={handleClose}>
						<CrossIcon width={18} height={18} fill="#000B26" fillOpacity={0.72} />
					</button>
				</div>
				<form className={cl.modal_form}>
					<label htmlFor="phone">
						<input
							type="mail"
							name='email'
							placeholder='Email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</label>
					<label htmlFor="password">
						<input
							type="password"
							name='password'
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Пароль' />
					</label>
					<SubmitButton onClick={handleSubmit} text="Войти" />
				</form>
				<div className={cl.modal_links_wrapper}>
					<Link to="/">Войти с помощью смс</Link>
					<Link to="/reg">Регистрация</Link>
				</div>
				<div onClick={handleClose}>
					<LightButton onClick={handleSubmit} text="Вход для партнеров" />
				</div>
			</Modal>
		</>
	);
}
