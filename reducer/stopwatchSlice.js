import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isStopwatchStarted: false,
    isWin: false,
};
export const stopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState,
    reducers: {
        setStart: (state, action) => {
            state.isStopwatchStarted = action.payload;
        },
        setWin: (state, action) => {
            state.isWin = action.payload;
        },
    },
});
export const { setStart, setWin } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
