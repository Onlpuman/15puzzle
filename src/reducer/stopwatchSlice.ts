import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface IStopWatchState {
	isStopwatchStarted: boolean,
	isWin: boolean,
}

const initialState: IStopWatchState = {
	isStopwatchStarted: false,
	isWin: false,
};

export const stopwatchSlice = createSlice({
	name: 'stopwatch',
	initialState,
	reducers: {
		setStart: (state, action: PayloadAction<boolean>) => {
			state.isStopwatchStarted = action.payload;
		},
		setWin: (state, action: PayloadAction<boolean>) => {
			state.isWin = action.payload;
		},
	},
});

export const { setStart, setWin } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;