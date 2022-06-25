import { useSelector } from 'react-redux';
import { Time } from './Time';

export const Progress = (props) => {
	const { value } = useSelector((state) => state.counter);
	const { isWin } = useSelector((state) => state.timer);

	return (
		<div className={
			[
				isWin && 'progress-win-container', 'progress-container'
			].filter(Boolean).join(' ')
		}>
			<div className='progress'>
				<span>Moves counter: { value }</span>
				<Time/>
			</div>
			{isWin && (
				<span className='win-block'>Congratulations! You Win!</span>
			)}
		</div>
	)
}