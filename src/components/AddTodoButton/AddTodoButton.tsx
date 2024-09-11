"use client"
import Image from 'next/image';
import PlusIcon from '@/ui/plusIcon.svg'
import { useAppDispatch } from '@/hooks/useToolkit';
import { openModal } from '@/store/slices/modalSlice';

export const AddTodoButton = () => {
	const dispatch = useAppDispatch();

	return (
		<button className='btn todo__btn todo__btn-add' onClick={() => dispatch(openModal())}>
			<Image src={PlusIcon} alt='add todo icon' width={24} height={24} />
		</button>
	)
}
