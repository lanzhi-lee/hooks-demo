import React, { useState, useContext } from 'react'
import { Context } from './hooks'

const Header = () => {
	const { actions } = useContext(Context)

	const [inputVal, setInputVal] = useState('');
	const handleChange = event => { setInputVal(event.target.value) }

	const addItem = () => {
		actions.addItem(inputVal)
		setInputVal('')
	}

	return (
		<section className="header">
			<input className="header__input" type="text" value={inputVal} onChange={handleChange} />
			<button className="header__confirm" onClick={addItem}>add</button>
		</section>
	)
}

export default Header
