import { FC, useEffect, useState } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { useAppDispatch } from '../models/hooks';
import { switchTheme } from '../reducer/themeSlice';

export const ThemeSwitcher:FC = () => {
	const dispatch = useAppDispatch();
	const [radioValue, setRadioValue] = useState('1');

	const radios = [
		{name: 'Light', value: '1'},
		{name: 'Dark', value: '2'},
	];

	useEffect(() => {
		radioValue === '2'
			? dispatch(switchTheme(true))
			: dispatch(switchTheme(false));
	},[radioValue]);

	return (
		<div className="theme-container">
			<ButtonGroup>
				{radios.map((radio, idx) => (
					<ToggleButton
						key={idx}
						id={`radio-${idx}`}
						type="radio"
						variant="outline-secondary"
						value={radio.value}
						checked={radioValue === radio.value}
						onChange={(e) => setRadioValue(e.currentTarget.value)}
					>
						{radio.name}
					</ToggleButton>
				))}
			</ButtonGroup>
		</div>
	);
};