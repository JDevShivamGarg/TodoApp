import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoButton from './AddTodoButton';
import Navbar from './Navbar';
import { FaPlus } from "react-icons/fa";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [showAddTodo, setShowAddTodo] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setShowAddTodo(false);
  };

  const handleToggle = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemove = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div>
      <Navbar/>
      <div className="transition-opacity duration-200 sm:px-6 lg:px-8 ml-32">
        <div className="px-4 py-8 space-y-4 sm:px-0">
          <div className="grid grid-cols-1">
            <h2 className="text-3xl font-bold py-4 leading-6 text-gray-900">Things to get done</h2>
            <p className='pt-4 font-semibold text-xl'>Things to do</p>
            <TodoList todos={activeTodos} onToggle={handleToggle} onRemove={handleRemove} />
          </div>

          {!showAddTodo && (
            <div className='flex inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-full shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 gap-2'>
              <FaPlus />
              <button
                type="button"
                onClick={() => setShowAddTodo(true)}
                className=""
              >
                Add a todo
              </button>
            </div>
          )}

          {showAddTodo && <AddTodoButton onAdd={handleAdd} onCancel={() => setShowAddTodo(false)} />}

          <div className="grid grid-cols-1">
            <h2 className="text-lg font-medium leading-6 text-gray-900">Things done</h2>
            <TodoList todos={completedTodos} onToggle={handleToggle} onRemove={handleRemove} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
