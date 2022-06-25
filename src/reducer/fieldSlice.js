import { createSlice } from '@reduxjs/toolkit';
import { generateBoard } from '../constants';

export const fieldSlice = createSlice({
	name: 'field',
	initialState: {
		board: generateBoard(16),
	},
	reducers: {
		setBoard: (state, action) => {
			const { copy } = action.payload;
			state.board = copy;
		},
		setNewBoard: (state) => {
			state.board = generateBoard(16);
		}
	},
});

export const { setBoard, setNewBoard } = fieldSlice.actions;
export default fieldSlice.reducer;