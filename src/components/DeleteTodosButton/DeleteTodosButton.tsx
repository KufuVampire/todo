'use client';

import { useAppDispatch, useAppSelector } from "@/hooks/useToolkit";
import { deleteTodos } from "@/store/slices/todoSlice";

export const DeleteTodosButton = () => {
	const { todos } = useAppSelector(state => state.todos);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(deleteTodos());
	}

	return (
		<button disabled={todos.length === 0} onClick={handleClick} className="btn todo__delete-todos">Clear todos</button>
	)
}
