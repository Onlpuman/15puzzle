import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTimerWin } from '../reducer/timerSlice';

export const Time = () =>{
	const { isTimerStarted, isWin, isTimerWin } = useSelector((state)=> state.timer);
	const dispatch = useDispatch();
	const winTimeRef = useRef(0);
	const [second, setSecond] = useState(0);

	useEffect(()=>{
		if(!isTimerStarted){
			setSecond(0);
		}
	},[isTimerStarted]);

	useEffect(()=>{
		const timeout = setTimeout(()=>{
			if(isTimerStarted){
				setSecond(second + 1);
				winTimeRef.current++;
			}
		}, 1000);
		return ()=>{
			clearTimeout(timeout);
		}
	},[second, isTimerStarted]);

	useEffect(()=>{
		if(isTimerWin){
			winTimeRef.current = 0;
			dispatch(setTimerWin({isTimerWin: false}));
		}
	},[isTimerWin]);

	
	const time = new Date(second * 1000).toISOString().slice(11, 19);
	const timeWin = new Date(winTimeRef.current * 1000).toISOString().slice(11, 19);

	return (
		<>
			<div className='time-container'>
				<span>{'Time: '}</span>
				<span>{!isWin ? time : timeWin}</span>
			</div>
		</>
	)
}