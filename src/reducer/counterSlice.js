import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		setValue: (state) => {
			state.value += 1;
		},
		resetValue: (state) => {
			state.value = 0;
		},
	},
})

export const { setValue, resetValue } = counterSlice.actions;
export default counterSlice.reducer;