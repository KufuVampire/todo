import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './slices/todoSlice'
import modalReducer from './slices/modalSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
	reducer: {
		todos: todosReducer,
		modal: modalReducer,
		theme: themeReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;