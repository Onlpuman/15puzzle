import { createSlice } from '@reduxjs/toolkit';

import { generateBoard } from '../constants';
import { IItem } from '../constants';

import type { PayloadAction } from '@reduxjs/toolkit';

interface IFieldState {
	board: IItem[];
}
 
const initialState: IFieldState = {
	board: generateBoard(16),
};

export const fieldSlice = createSlice({
	name: 'field',
	initialState,
	reducers: {
		setBoard: (state, action: PayloadAction<IItem[]>) => {
			state.board = action.payload;
		},
		setNewBoard: (state) => {
			state.board = generateBoard(16);
		},
	},
});

export const { setBoard, setNewBoard } = fieldSlice.actions;
export default fieldSlice.reducer;