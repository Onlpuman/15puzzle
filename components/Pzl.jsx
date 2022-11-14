import { useAppSelector, useAppDispatch } from '../models/hooks';
import { emptyItemId, winBoard } from '../constants';
import { setMovesCounter } from '../reducer/counterSlice';
import { setBoard } from '../reducer/fieldSlice';
import { setStart, setWin } from '../reducer/stopwatchSlice';
import { Square } from './Square';
const getItemSize = () => {
    const innerWidth = window.innerWidth;
    let itemSize = 100;
    if (innerWidth <= 425) {
        itemSize = 80;
    }
    if (innerWidth <= 320) {
        itemSize = 72;
    }
    if (innerWidth <= 280) {
        itemSize = 64;
    }
    return itemSize;
};
const getCheckedForWin = (items) => {
    const result = items.map((item, i) => {
        var _a, _b;
        return item.top === ((_a = winBoard[i]) === null || _a === void 0 ? void 0 : _a.top) && item.left === ((_b = winBoard[i]) === null || _b === void 0 ? void 0 : _b.left);
    }).findIndex((item) => !item);
    return result === -1;
};
export const Pzl = () => {
    const { board } = useAppSelector((state) => state.field);
    const { isStopwatchStarted } = useAppSelector((state) => state.stopwatch);
    const dispatch = useAppDispatch();
    const onSquareClick = (id) => {
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
            const copyBoard = [...board];
            copyBoard[emptyItemId] = Object.assign(Object.assign({}, board[id]), { id: emptyItemId });
            copyBoard[id] = Object.assign(Object.assign({}, board[emptyItemId]), { id });
            dispatch(setBoard(copyBoard));
            if (getCheckedForWin(copyBoard)) {
                dispatch(setStart(false));
                dispatch(setWin(true));
            }
        }
    };
    return (<div className="puzzle-container">
			{board.map(({ id, top, left }) => (<Square key={`square-${id + 1}`} top={top} left={left} id={id} onClick={onSquareClick}/>))}
		</div>);
};
