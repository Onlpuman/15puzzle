import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useAppSelector } from '../models/hooks';
export const Stopwatch = () => {
    const { isStopwatchStarted, isWin } = useAppSelector((state) => state.stopwatch);
    const winTimeRef = useRef('');
    const [second, setSecond] = useState(0);
    const time = new Date(second * 1000).toISOString().slice(11, 19);
    useLayoutEffect(() => {
        setSecond(0);
    }, [isWin, isStopwatchStarted]);
    useEffect(() => {
        if (!isStopwatchStarted) {
            winTimeRef.current = new Date(second * 1000).toISOString().slice(11, 19);
            return;
        }
        const timeout = setTimeout(() => {
            setSecond(second + 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [second, isStopwatchStarted]);
    return (<>
			<div className="stopwatch-container">
				<span>{'Time: '}</span>
				<span>{!isWin ? time : winTimeRef.current}</span>
			</div>
		</>);
};
