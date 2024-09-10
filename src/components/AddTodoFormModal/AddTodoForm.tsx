"use client"
import { ModalContext } from '@/context/modalContext'
import { useAppDispatch } from '@/hooks/useToolkit';
import { createTodo } from '@/store/slices/todoSlice';
import React, { FormEvent, useContext, useState } from 'react'

export const AddTodoFormModal = () => {
	const [title, setTitle] = useState<string>('');
	const modalContext = useContext(ModalContext);
	const dispatch = useAppDispatch();

	const close = () => {
		setTitle('');
		modalContext?.setIsOpen(false);
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title.trim()) {
			dispatch(createTodo({ id: `${new Date().getTime() }`, title, completed: false }));
			close();
		}
	}

	const closeModal = () => {
		setTitle('');
		close();
	}

	return (
		<div className={modalContext?.isOpen ? 'modal z-10' : 'modal hidden'}>
			<form className='todo__form' onSubmit={handleSubmit}>
				<h2 className='heading todo__form-heading'>New todo</h2>
				<input type="text" className='todo__form-input' placeholder='Input your note...' value={title} onChange={(e) => setTitle(e.target.value)} />
				<div className="todo__form-wrapper">
					<button type='button' className='btn todo__form-btn todo__form-btn-cancel' onClick={closeModal}>Cancel</button>
					<button type='submit' className='btn todo__form-btn todo__form-btn-apply'>Apply</button>
				</div>
			</form>
			<div className="modal__overlay"></div>
		</div>

	)
}
