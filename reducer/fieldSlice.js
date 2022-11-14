import { createSlice } from '@reduxjs/toolkit';
import { generateBoard, winBoard } from '../constants';
// const initialState: IFieldState = {
// 	board: generateBoard(16),
// };
const initialState = {
    board: winBoard,
};
export const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload;
        },
        setNewBoard: (state) => {
            state.board = generateBoard(16);
        },
    },
});
export const { setBoard, setNewBoard } = fieldSlice.actions;
export default fieldSlice.reducer;
