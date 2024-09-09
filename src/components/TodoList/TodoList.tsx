"use client"
import { useAppDispatch, useAppSelector } from '@/hooks/useToolkit';
import { TodoItem } from './TodoItem/TodoItem';
import { useEffect } from 'react';
import { getTodos } from '@/store/slices/todoSlice';

export const TodoList = () => {
	const { todos } = useAppSelector(state => state.todos);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getTodos())
	}, [dispatch])

	return (
		<ul className='list todo__list'>
			{
				todos.map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))
			}
		</ul>
	)
}
