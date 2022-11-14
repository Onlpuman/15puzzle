import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    darkTheme: false,
};
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: (state, action) => {
            state.darkTheme = action.payload;
        },
    },
});
export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
