import { useSelector } from 'react-redux';
import { emptyElementId } from '../constants';

export const Square = props => {
	const { id, onClick, top, left } = props;
	const {isWin} = useSelector((state)=> state.timer);

	const handleClick = () => {
		if (id !== emptyElementId) {
			onClick(id);
		}
	}
	
	return (
		<div
			style={{
				top: `${top}px`,
				left: `${left}px`,
			}}
			className={
				[
					isWin && 'item-disabled item-win',
					id === emptyElementId ? 'empty' : 'item',
				].filter(Boolean).join(' ')
			}
			onClick={handleClick}
		>
			{id !== emptyElementId && id + 1}
		</div>
	)
}