import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi'

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({id: Date.now(), item: text, status: 'active'});
    setText('');
  };

  return (
    <div className='p-4'>
      <form 
        onSubmit={handleSubmit}
        className='w-full h- flex justify-center items-center m-4 '> 
        <input 
          value={text}
          onChange={(e) => setText(e.target.value)} 
          placeholder='할 일을 입력해주세요'
          className='w-3/4 mr-2'
          ></input>
        <button
          className='text-2xl rounded-2xl text-basic_font dark: text-white border-basic_font dark:text-dark_font'>
            <HiPlus />
        </button>
      </form>
    </div>
  );
}