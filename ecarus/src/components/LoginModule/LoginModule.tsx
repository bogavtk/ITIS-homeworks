import React, { useState, CSSProperties } from 'react';
import cl from './LoginModule.module.sass';
import Modal from 'react-modal';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import axios from '../../api/axios';


Modal.setAppElement('#root');

export const LoginModule: React.FC = () => {

	const overlayStyles: CSSProperties = {
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	};

	const contentStyles: CSSProperties = {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'white',
		padding: '20px',
		borderRadius: '5px',
	};

	const [isOpen, setIsOpen] = useState(false);
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div className={cl.enter_button_wrap}>
				<button className={cl.enter_button} onClick={() => setIsOpen(true)}>Войти</button>
			</div>
			<Modal
				isOpen={isOpen}
				onRequestClose={handleClose}
				style={{ overlay: overlayStyles, content: contentStyles }}
				contentLabel="Login Modal"
			>
				<h2>Вход</h2>
				<form >
					<label htmlFor="phone">
						<input type="tel" name='phone' placeholder='Телефон' />
					</label>
					<label htmlFor="password">
						<input type="password" name='password' placeholder='Пароль' />
					</label>
					<SubmitButton onClick={handleClose} text="Войти" />
				</form>
				D
				<button onClick={handleClose}>Close Modal</button>
			</Modal>
		</>
	);
}
