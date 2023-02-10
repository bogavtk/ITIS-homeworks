import React, { FC } from 'react';
import { useState } from 'react';
import './Clicker.sass';

const Clicker = () => {

	const [clicker, setClicker] = useState(0);

	return (
		<section className='clicker'>
			<h1>You can click on me!</h1>
			<div className='clicker__counter'>
				<button
					onClick={() => setClicker(clicker + 1)}>
					Click to count</button>
				<button
					onClick={() => setClicker(clicker - 1)}>You can delete on -1</button>
			</div>
			<p>Right now we have: {clicker}</p>
			{
				clicker < 0 ? <p className='clicker__mistake'>You have negative number</p> : null
			}
		</section>
	)
}

export default Clicker;
