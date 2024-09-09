"use client"
import { useState } from "react"

export const SortDropdown = () => {
	const [sortValue, setSortValue] = useState<'All' | 'Completed' | 'Incompleted'>('All')

	return (
		<select
			value={sortValue}
			onChange={(e) => setSortValue(e.target.value)}
			className='todo__select'
		>
			<option value="All">All</option>
			<option value="Completed">Completed</option>
			<option value="Incompleted">Incompleted</option>
		</select >
	)
}
