import Image from 'next/image';
import DarkThemeIcon from '@/ui/darkThemeIcon.svg'
import PlusIcon from '@/ui/plusIcon.svg'
import SearchIcon from '@/ui/searchIcon.svg'
import { SortDropdown } from '@/components/SortDropdown/SortDropdown';
import { TodoList } from '@/components/TodoList/TodoList';

export default function Home() {

  return (
    <section className="section todo__section">
      <div className="container todo__container">
        <h2 className='heading todo__heading'>TODO LIST</h2>
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
        <button className='btn todo__btn todo__btn-add'>
          <Image src={PlusIcon} alt='add todo icon' width={24} height={24} />
        </button>
        <form className='modal hidden'>
          <h2>New note</h2>
          <input type="text" />
          <div className="modal__wrapper">
            <button type='button'>Cancel</button>
            <button type='submit'>Apply</button>
          </div>
        </form>
      </div>
    </section>
  );
}
