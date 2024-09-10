
import Image from 'next/image';

import { SortDropdown } from '@/components/SortDropdown/SortDropdown';
import { TodoList } from '@/components/TodoList/TodoList';
import { AddTodoButton } from '@/components/AddTodoButton/AddTodoButton';
import { AddTodoFormModal } from '@/components/AddTodoFormModal/AddTodoForm';

import DarkThemeIcon from '@/ui/darkThemeIcon.svg'
import SearchIcon from '@/ui/searchIcon.svg'

export default function Home() {

  return (
    <section className="section todo__section">
      <div className="container todo__container">
        <h2 className='heading todo__heading'>Todo list</h2>
        <div className="todo__wrapper">
          <label className='todo__label'>
            <input type="text" className='todo__search-input' placeholder='Search...' />
            <Image className='todo__search-input-icon' src={SearchIcon} alt='search icon' width={21} height={21} />
          </label>
          <SortDropdown />
          <button className='btn todo__btn todo__btn-theme'>
            <Image src={DarkThemeIcon} className='todo__btn-theme-icon' alt='dark theme icon' width={22} height={22} />
          </button>
        </div>
        <TodoList />
        <AddTodoButton />
        <AddTodoFormModal />
      </div>
    </section>
  );
}
