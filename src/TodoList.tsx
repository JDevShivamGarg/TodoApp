import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => (
  <ul className="mt-4 space-y-2">
    {todos.length > 0 ? (
      todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))
    ) : (
      <p className="text-base text-gray-500">No todos here!</p>
    )}
  </ul>
);

export default TodoList;
