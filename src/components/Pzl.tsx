import { FC } from 'react';

import { useAppSelector, useAppDispatch } from '../models/hooks';

import { emptyItemId, winBoard } from '../constants';
import { setMovesCounter } from '../reducer/counterSlice';
import { setBoard } from '../reducer/fieldSlice';
import { setStart, setWin } from '../reducer/stopwatchSlice';
import { IItem } from '../constants';

import { Square } from './Square';

type CheckedWin = (items:IItem[]) => boolean;
export type SquareClick = (id:number) => void;

const getItemSize = () => {
	const innerWidth = window.innerWidth;
	let itemSize = 100;

	if (innerWidth <= 425){
		itemSize = 80;
	}
	if (innerWidth <= 320){
		itemSize = 72;
	}
	if (innerWidth <= 280){
		itemSize = 64;
	}
	return itemSize;
};

const getCheckedForWin:CheckedWin = (items) => {
	const result = items.map((item, i) => {
		return item.top === winBoard[i]?.top && item.left === winBoard[i]?.left;
	}).findIndex((item) => !item);
	return result === -1;
};

export const Pzl:FC = () => {
	const { board } = useAppSelector((state) => state.field);
	const { isStopwatchStarted } = useAppSelector((state) => state.stopwatch);
	const dispatch = useAppDispatch();

	const onSquareClick:SquareClick = (id) => {
		const itemSize = getItemSize();

		const topEmptyItem = board[emptyItemId].top;
		const topItem = board[id].top;

		const leftEmptyItem = board[emptyItemId].left;
		const leftItem = board[id].left;

		const itemMovedDown = (topEmptyItem - topItem) === itemSize && (leftEmptyItem - leftItem) === 0;
		const itemMovedUp = (topItem - topEmptyItem) === itemSize && (leftEmptyItem - leftItem) === 0;
		const itemMovedLeft = (topEmptyItem - topItem) === 0 && (leftItem - leftEmptyItem) === itemSize;
		const itemMovedRight = (topEmptyItem - topItem) === 0 && (leftEmptyItem - leftItem) === itemSize;

		if (itemMovedDown || itemMovedUp || itemMovedLeft || itemMovedRight) {
			!isStopwatchStarted && dispatch(setStart(true));

			dispatch(setMovesCounter());

			const copyBoard:IItem[] = [...board];

			copyBoard[emptyItemId] = {
				...board[id],
				id: emptyItemId,
			};

			copyBoard[id] = {
				...board[emptyItemId],
				id,
			};

			dispatch(setBoard(copyBoard));

			if (getCheckedForWin(copyBoard)) {
				dispatch(setStart(false));
				dispatch(setWin(true));
			}
		}
	};

	return (
		<div className="puzzle-container">
			{board.map(({ id, top, left }) => (
				<Square
					key={`square-${id + 1}`}
					top={top}
					left={left}
					id={id}
					onClick={onSquareClick}
				/>
			))}
		</div>
	);
};