import React, { memo } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = memo(({ todo, onToggle, onRemove }) => (
  <li className="relative flex items-start">
    <div className="flex items-center h-5">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
      />
    </div>
    <div className="ml-3 text-sm flex justify-between w-full">
      <span className={`font-medium ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
        {todo.text}
      </span>
      <button
        type="button"
        onClick={() => onRemove(todo.id)}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  </li>
));

export default TodoItem;
