import { useSelector, useDispatch } from 'react-redux';
import { Square } from "./Square";
import { emptyElementId, winBoard } from '../constants';
import { setValue } from '../reducer/counterSlice';
import { setBoard } from '../reducer/fieldSlice';
import { setStart, setWin } from '../reducer/timerSlice';

export const Pzl = () => {
	const { board } = useSelector((state) => state.field);
	const { isTimerStarted } = useSelector((state) => state.timer);
	const dispatch = useDispatch();
	
	const onSquareClick = (id) => {	
		const innerWidth = window.innerWidth;
		let itemSize = null;
		if (innerWidth > 425){
			itemSize = 100;
		} else if (innerWidth <= 425 && innerWidth > 320 ){
			itemSize = 80;
		} else if (innerWidth <= 320  && innerWidth > 280 ){
			itemSize = 72;
		} else if (innerWidth <= 280){
			itemSize = 64;
		}

		if (
			(board[emptyElementId].top - board[id].top) === itemSize && (board[emptyElementId].left - board[id].left) === 0
			|| (board[id].top - board[emptyElementId].top) === itemSize && (board[emptyElementId].left - board[id].left) === 0
			|| (board[emptyElementId].top - board[id].top) === 0 && (board[id].left - board[emptyElementId].left) === itemSize
			|| (board[emptyElementId].top - board[id].top) === 0 && (board[emptyElementId].left - board[id].left) === itemSize
		) {
			dispatch(setValue());

			if(!isTimerStarted){
				dispatch(setStart({isTimerStarted:true}));
			}

			const copy = [...board];

			copy[emptyElementId] = {
				...board[id],
				id: emptyElementId,
			};
			
			copy[id] = {
				...board[emptyElementId],
				id,
			};

			dispatch(setBoard({copy}));
			
			let win = false;
			for(let i = 0; i <= 15; i++){
				if(
					copy[i].top === winBoard[i].top &&
					copy[i].left === winBoard[i].left
				){
					win = true;
				} else {
					win = false;
					break;
				}
			}
			
			if (win === true){
				dispatch(setStart({isTimerStarted: false}));
				dispatch(setWin({isWin: true}));
			}
		}
	};
	
	return (
		<div className="pzl">
			{board.map(({id, top, left}) => {

				return (
					<Square
						key={`square-${id}`}
						top={top}
						left={left}
						id={id}
						onClick={onSquareClick}
					/>
				)
			})}
		</div>
	)
}