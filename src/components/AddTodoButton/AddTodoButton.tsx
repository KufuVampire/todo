"use client"
import Image from 'next/image';
import PlusIcon from '@/ui/plusIcon.svg'
import { useContext } from 'react';
import { ModalContext } from '@/context/modalContext';

export const AddTodoButton = () => {
	const modalContext = useContext(ModalContext);

	return (
		<button className='btn todo__btn todo__btn-add' onClick={() => modalContext?.setIsOpen(prev => !prev)}>
			<Image src={PlusIcon} alt='add todo icon' width={24} height={24} />
		</button>
	)
}
