
import Image from 'next/image';

import { SortDropdown } from '@/components/SortDropdown/SortDropdown';
import { TodoList } from '@/components/TodoList/TodoList';
import { AddTodoButton } from '@/components/AddTodoButton/AddTodoButton';
import { AddTodoFormModal } from '@/components/AddTodoFormModal/AddTodoForm';
import { ToggleThemeButton } from '@/components/ToggleThemeButton/ToggleThemeButton';
import { TodoSearch } from '@/components/TodoSearch/TodoSearch';

import SearchIcon from '@/ui/searchIcon.svg'
import { DeleteTodosButton } from '@/components/DeleteTodosButton/DeleteTodosButton';

export default function Home() {

  return (
    <section className="section todo__section">
      <div className="container todo__container">
        <h2 className='heading todo__heading'>Todo list</h2>
        <div className="todo__wrapper">
          <label className='todo__label'>
            <TodoSearch />
            <Image className='todo__search-input-icon' src={SearchIcon} alt='search icon' width={21} height={21} />
          </label>
          <SortDropdown />
          <ToggleThemeButton />
        </div>
        <DeleteTodosButton />
        <TodoList />
        <AddTodoButton />
        <AddTodoFormModal />
      </div>
    </section>
  );
}
