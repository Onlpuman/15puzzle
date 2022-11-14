import { FC } from 'react';

import { Button } from 'react-bootstrap';

import { useAppSelector, useAppDispatch } from '../models/hooks';
import { resetMovesCounter } from '../reducer/counterSlice';
import { setNewBoard } from '../reducer/fieldSlice';
import { setStart, setWin } from '../reducer/stopwatchSlice';

import { Stopwatch } from './Stopwatch';

export const Progress:FC = () => {
	const { count } = useAppSelector((state) => state.counter);
	const { isWin } = useAppSelector((state) => state.stopwatch);
	const dispatch = useAppDispatch();

	const styleContainer:string = isWin ? 'progress-container progress-win-container' : 'progress-container';
	const styleButtonVariant:string = isWin ? 'success' : 'secondary';

	const handleClick = () => {
		dispatch(resetMovesCounter());
		dispatch(setStart(false));
		dispatch(setNewBoard());
		dispatch(setWin(false));
	};

	return (
		<>
			<div className={styleContainer}>
				<div className="progress">
					<div className="counter-container">
						<span>Moves counter: {count}</span>
					</div>
					<Stopwatch/>
				</div>
				<div className="win-container">
					{isWin && (<span>Congratulations! You Win!</span>)}
				</div>
				<Button
					variant={styleButtonVariant}
					size={'lg'}
					onClick={handleClick}
				>
					Start over
				</Button>
			</div>
		</>
	);
};