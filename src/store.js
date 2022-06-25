import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterSlice';
import fieldReducer from './reducer/fieldSlice';
import timerReducer from './reducer/timerSlice';

const store = configureStore(
	{
		reducer: {
			counter: counterReducer,
			field: fieldReducer,
			timer: timerReducer,
		},
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;