import { Checkmark } from "@/components/Checkmark/Checkmark"
import { Pen } from "@/components/Pen/Pen"
import { Trash } from "@/components/Trash/Trash"
import { useAppDispatch } from "@/hooks/useToolkit"
import { deleteTodoById, patchTodo } from "@/store/slices/todoSlice"
import { Todo } from "@/types/types"
import { FC, useState } from "react"


interface ITodoItem {
	todo: Todo
}

export const TodoItem: FC<ITodoItem> = ({ todo }) => {
	const [checked, setChecked] = useState<boolean>(todo.completed)
	const [isEdited, setIsEdited] = useState<boolean>(false);
	const [todoValue, setTodoValue] = useState<string>(todo.title);

	const dispatch = useAppDispatch()

	const handleClick = () => {
		if (!todoValue.trim()) {
			dispatch(deleteTodoById(todo.id));
			return;
		};
		setIsEdited(false);
		dispatch(patchTodo({ ...todo, title: todoValue }));
	}

	const handleChange = () => {
		setChecked(prev => !prev);
		dispatch(patchTodo({ ...todo, completed: !todo.completed }));
	}

	return (
		<li className="list__item todo__item">
			<input type="checkbox" className="list__item-checkbox" checked={checked} onChange={handleChange} />
			<input type="text" disabled={!isEdited} value={todoValue} onChange={(e) => setTodoValue(e.target.value)} className="list__item-input" />
			<div className="list__item-wrapper">
				{!isEdited ?
					<button type="button" onClick={() => setIsEdited(true)} className="list__item-btn">
						<Pen classes='list__item-icon list__item-icon-pen' />
					</button> :
					<button type="button" onClick={handleClick} className="list__item-btn">
						<Checkmark classes='list__item-icon list__item-icon-checkmark' />
					</button>
				}
				<button type="button" onClick={() => dispatch(deleteTodoById(todo.id))} className="list__item-btn">
					<Trash classes="list__item-icon list__item-icon-trash" />
				</button>
			</div>
		</li>
	)
}
