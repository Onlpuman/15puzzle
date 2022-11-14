import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface INight {
	darkTheme: boolean,
}

const initialState: INight = {
	darkTheme: false,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		switchTheme: (state, action: PayloadAction<boolean>) => {
			state.darkTheme = action.payload;
		},
	},
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;