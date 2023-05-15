import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Header({statusList, onChangeStatus}) {
  const handleStatus = (e) => {
    onChangeStatus(statusList);
  };

  return (
    <div className='pl-4'>
      <ul>
        <button 
          onClick={handleStatus}
          >
          <li 
            key={uuidv4()}
            className='text-2xl
            text-basic_font
            dark:text-dark_font'>{statusList}</li>
        </button> 
      </ul>
    </div>
  );
}