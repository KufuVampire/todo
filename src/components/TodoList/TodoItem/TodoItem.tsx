import { useAppDispatch } from "@/hooks/useToolkit"
import { deleteTodoById, patchTodo } from "@/store/slices/todoSlice"
import { Todo } from "@/types/types"
import { FC, useState } from "react"

interface ITodoItem {
	todo: Todo
}

export const TodoItem: FC<ITodoItem> = ({ todo }) => {
	const [checked, setChecked] = useState<boolean>(todo.completed)
	const [isChange, setIsChange] = useState<boolean>(false);
	const [todoValue, setTodoValue] = useState<string>(todo.title);

	const dispatch = useAppDispatch()

	const handleClick = () => {
		if (!todoValue.trim()) return;
		setIsChange(false);
		dispatch(patchTodo({ ...todo, title: todoValue }));
	}

	const handleChange = () => {
		setChecked(prev => !prev);
		dispatch(patchTodo({ ...todo, completed: !todo.completed }));
	}

	return (
		<li className="list__item todo__item">
			<input type="checkbox" className="list__item-checkbox" checked={checked} onChange={handleChange} />
			<input type="text" disabled={!isChange} value={todoValue} onChange={(e) => setTodoValue(e.target.value)} className="list__item-input" />
			<div className="list__item-wrapper">
				{!isChange ?
					<button type="button" onClick={() => setIsChange(true)} className="list__item-btn">Change</button> :
					<button type="button" onClick={handleClick} className="list__item-btn">Apply</button>
				}
				<button type="button" onClick={() => dispatch(deleteTodoById(todo.id))} className="list__item-btn">Delete</button>
			</div>
		</li>
	)
}
