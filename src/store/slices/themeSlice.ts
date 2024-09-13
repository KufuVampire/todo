import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
	currentTheme: string
}

const initialState: ThemeState = {
	currentTheme: 'light'
}

export const themeSlice = createSlice({
	name: '@theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			if (state.currentTheme === 'light') {
				state.currentTheme = 'dark'
			} else {
				state.currentTheme = 'light'
			}
		}
	}
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;