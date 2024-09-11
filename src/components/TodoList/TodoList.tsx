"use client"
import { useAppDispatch, useAppSelector } from '@/hooks/useToolkit';
import { TodoItem } from './TodoItem/TodoItem';
import { useEffect } from 'react';
import { getTodos } from '@/store/slices/todoSlice';

import Empty from '@/assets/empty.png'
import Image from 'next/image';

export const TodoList = () => {
	const { todos, loading } = useAppSelector(state => state.todos);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getTodos())
	}, [dispatch])

	return (
		<ul className='list todo__list'>
			{
				loading ? <div className='loader'>Loading...</div> :
						todos.length ?
							todos.map(todo => (
								<TodoItem key={todo.id} todo={todo} />
							)) :
							<div className='todo__empty'>
								<Image src={Empty} alt='empty todos' className='todo__empty-image' />
								<h2 className='heading todo__heading-empty'>Empty...</h2>
							</div>
			}
		</ul>
	)
}
