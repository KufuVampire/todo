"use client"
import { useAppDispatch, useAppSelector } from '@/hooks/useToolkit';
import { closeModal } from '@/store/slices/modalSlice';
import { createTodo } from '@/store/slices/todoSlice';
import React, { FormEvent, useState } from 'react'

export const AddTodoFormModal = () => {
	const [title, setTitle] = useState<string>('');

	const { isOpen } = useAppSelector(state => state.modal);
	const dispatch = useAppDispatch();

	const close = () => {
		setTitle('');
		dispatch(closeModal())
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title.trim()) {
			dispatch(createTodo({ id: `${new Date().getTime() }`, title, completed: false }));
			close();
		}
	}

	return (
		<div className={isOpen ? 'modal z-10' : 'modal hidden'}>
			<form className='todo__form' onSubmit={handleSubmit}>
				<h2 className='heading todo__form-heading'>New todo</h2>
				<input type="text" className='todo__form-input' placeholder='Input your note...' value={title} onChange={(e) => setTitle(e.target.value)} />
				<div className="todo__form-wrapper">
					<button type='button' className='btn todo__form-btn todo__form-btn-cancel' onClick={close}>Cancel</button>
					<button type='submit' className='btn todo__form-btn todo__form-btn-apply'>Apply</button>
				</div>
			</form>
			<div className="modal__overlay"></div>
		</div>

	)
}
