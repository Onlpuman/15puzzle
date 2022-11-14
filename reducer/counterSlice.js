import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    count: 0,
};
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setMovesCounter: (state) => {
            state.count += 1;
        },
        resetMovesCounter: (state) => {
            state.count = 0;
        },
    },
});
export const { setMovesCounter, resetMovesCounter } = counterSlice.actions;
export default counterSlice.reducer;
