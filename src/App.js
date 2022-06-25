import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Pzl } from './components/Pzl';
import { Progress } from './components/Progress';
import { resetValue } from './reducer/counterSlice';
import { setNewBoard} from './reducer/fieldSlice'
import { setStart, setWin, setTimerWin} from './reducer/timerSlice';

function App() {
	const { isWin, isTimerWin } = useSelector((state) => state.timer);
	const dispatch = useDispatch();
	
	const handleClick = () => {
		dispatch(resetValue());
		dispatch(setStart({isTimerStarted: false}));
		dispatch(setNewBoard());
		dispatch(setWin({isWin: false}));
		dispatch(setTimerWin({isTimerWin: true}));
	};

	return (
		<div className="App">
			<header>
				<h1>15 Puzzle</h1>
			</header>
			<main>
				<div className='main-container'>
					<Pzl/>
					<Progress/>
					<Button
						className={isWin && 'button-win'}
						variant={'secondary'}
						size={'lg'}
						onClick={handleClick}
					>
						{'Start over'}
					</Button>
				</div>
			</main>
		</div>
	);
}

export default App;