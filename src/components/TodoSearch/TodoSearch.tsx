"use client"

import { ChangeEvent, useState } from "react";

export const TodoSearch = () => {
	const [search, setSearch] = useState<string>('');


	const searchTodos = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	}

	return (
		<input type="text" className='todo__search-input' value={search} onChange={searchTodos} placeholder='Search...' />
	)
}
