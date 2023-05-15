import React from 'react';
import { GoTrashcan } from 'react-icons/go'


export default function Todo({todo, onUpdate, onDelete}) {

  const handleCheck = (e) => {
    onUpdate({...todo, status: e.target.checked ? 'completed' : 'active'});
  };

  const handleDelete = () => {
    onDelete(todo);
  }


  return (
    <li 
      key={todo.id} 
      className='flex justify-between items-center p-1'>
      <input 
        type='checkbox' 
        checked={todo.status === 'completed'}
        onChange={handleCheck}
        className=''/>
      <label 
        htmlFor='checkbox' 
        id={todo.id}
        className='flex-auto pl-4 pr-8 text-xl flex-auto w-60'>{todo.item}</label>
      <button 
        onClick={handleDelete}
        className='text-lg '><GoTrashcan /></button>
    </li>
  );
}