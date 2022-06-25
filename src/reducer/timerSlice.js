import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
	name: 'timer',
	initialState: {
		isTimerStarted: false,
		isWin: false,
		isTimerWin: false,
	},
	reducers: {
		setStart: (state, action) => {
			const {isTimerStarted} = action.payload;
			state.isTimerStarted = isTimerStarted;
		},
		setWin: (state, action) => {
			const {isWin} = action.payload;
			state.isWin = isWin;
		},
		setTimerWin: (state, action) => {
			const {isTimerWin} = action.payload;
			state.isTimerWin = isTimerWin;
		}
	},
});

export const { setStart, setWin, setTimerWin } = timerSlice.actions;
export default timerSlice.reducer;