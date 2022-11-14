import { FC } from 'react';

import { useAppSelector } from '../models/hooks';
import { emptyItemId } from '../constants';
import { IItem } from '../constants';

import { SquareClick } from './Pzl';

interface ISquareProps extends IItem {
	onClick: SquareClick
}

export const Square: FC<ISquareProps> = ({id, onClick, top, left}) => {
	const { isWin } = useAppSelector((state) => state.stopwatch);
	const styleContainer = [isWin && 'item-disabled item-win', id === emptyItemId ? 'empty' : 'item'].filter(Boolean).join(' ');
	const styleSquareCoordinates = {top: `${top}px`, left: `${left}px`};

	const handleClick = () => {
		if (id !== emptyItemId) {
			onClick(id);
		}
	};

	return (
		<div
			className={styleContainer}
			style={styleSquareCoordinates}
			onClick={handleClick}
		>
			{id !== emptyItemId && id + 1}
		</div>
	);
};