import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useDarkmode } from './context/DarkmodeContext';
import { FaSun, FaMoon } from 'react-icons/fa'

const statusList = ['all', 'active', 'completed'];

function App() {
  const [status, setStatus] = useState('all');
  const handleStatus = (status) => {
    setStatus(status)
  };
  const { darkmode, toggleDarkmode } = useDarkmode();

  return (
    <div className='flex flex-col rounded-lg bg-basic_point dark:bg-dark_point h-full'>
      <div className='flex items-center justify-between pb-5 border-b-1 border-black '>
        <button  
          onClick={() => toggleDarkmode()}
          className=' m-4 text-2xl text-basic_font dark:text-dark_font'>
            {!darkmode && <FaMoon />}
            {darkmode && <FaSun />}
            </button>
        <ul className='flex m-4'>
          {statusList.map((item) => 
            <Header currentStatus={status} statusList={item} onChangeStatus={handleStatus} />
          )}
        </ul>
      </div>
      <TodoList currentStatus={status} />
    </div>
  );
}

export default App;
