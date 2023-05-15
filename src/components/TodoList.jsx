import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';


export default function TodoList ({currentStatus}) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  const filtered = todos.filter((todo) => {
    return currentStatus === 'all' ? todo : todo.status === currentStatus
  });

  const handleAdd = (item) => {
    setTodos([...todos, item])
  };

  const handleUpdate = (updated) => { 
      setTodos(todos.map((todo) => {
        return todo.id === updated.id ? updated : todo
      }));
    }
  
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== item.id 
    }))
  }
 
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  return (
    <>
      <div className='flex justify-between p-2  bg-basic_content dark:bg-white h-full min-h-0 overflow-auto'>
        <ul>
          {filtered.map((todo) => (
            <Todo 
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
      <AddTodo  onAdd={handleAdd} />
    </>
  );
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}