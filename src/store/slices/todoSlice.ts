import { API_URL } from "@/constants/constants";
import { Todo, TodoState } from "@/types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: TodoState = {
	todos: [],
	loading: false,
	error: null
}

export const getTodos = createAsyncThunk(
	"todos/getTodos",
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetch(API_URL.todos);
			const data = await res.json();
			if (!res.ok) throw new Error('Something went wrong')
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const createTodo = createAsyncThunk(
	'todos/createTodo',
	async (todo: Todo, { rejectWithValue, dispatch }) => {
		try {
			const res = await fetch(`${API_URL.todos}`, {
				method: 'POST',
				body: JSON.stringify(todo),
				headers: {
					'Content-type': 'application/json'
				}
			});
			if (!res.ok) throw new Error('Todo was not created');

			dispatch(addTodo(todo));
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const patchTodo = createAsyncThunk(
	'todos/patchTodo',
	async (todo: Todo, { rejectWithValue, dispatch }) => {
		try {
			const res = await fetch(`${API_URL.todos}/${todo.id}`, {
				method: 'PATCH',
				body: JSON.stringify(todo),
				headers: {
					'Content-type': 'application/json'
				}
			});
			if (!res.ok) throw new Error('The todo was not deleted');

			dispatch(changeTodoTitle(todo));
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteTodoById = createAsyncThunk(
	'todos/deleteTodoById',
	async (id: string, { rejectWithValue, dispatch }) => {
		try {
			const res = await fetch(`${API_URL.todos}/${id}`, {
				method: "DELETE",
			});
			if (!res.ok) throw new Error('Something went wrong');

			dispatch(removeTodo({ id }))
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteTodos = createAsyncThunk<undefined, void, {state: RootState}>(
	'todos/deleteTodos',
	(_, { rejectWithValue, dispatch, getState }) => {
		try {
			const todos = getState().todos.todos;
			todos.forEach(async ({ id }: Todo) => {
				const res = await fetch(`${API_URL.todos}/${id}`, {
					method: "DELETE",
				});
				if (!res.ok) throw new Error('Something went wrong');
			});

			dispatch(removeTodos());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
)

export const todoSlice = createSlice({
	name: '@todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		changeTodoTitle: (state, action: PayloadAction<Todo>) => {
			state.todos = state.todos.map(todo => (todo.id === action.payload.id) ? { ...todo, title: action.payload.title } : todo);
		},
		toggleTodo: (state, action: PayloadAction<Todo>) => {
			state.todos = state.todos.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
		},
		removeTodo: (state, action: PayloadAction<{ id: string }>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
		},
		removeTodos: (state) => {
			state.todos = [];
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getTodos.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getTodos.fulfilled, (state, action) => {
				state.todos = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getTodos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload
			});
	},
});

export const { addTodo, changeTodoTitle, toggleTodo, removeTodo, removeTodos } = todoSlice.actions;
export default todoSlice.reducer