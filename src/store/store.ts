import { configureStore } from "@reduxjs/toolkit";
import todos from './slices/todoSlice'
import modal from './slices/modalSlice'
import theme from './slices/themeSlice'

export const store = configureStore({
	reducer: {
		todos,
		modal,
		theme,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;