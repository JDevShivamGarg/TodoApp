import React, { useState } from 'react';

interface AddTodoButtonProps {
  onAdd: (text: string) => void;
  onCancel: () => void;
}

const AddTodoButton: React.FC<AddTodoButtonProps> = ({ onAdd, onCancel }) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleSubmit = () => {
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col p-4 gap-4 shadow rounded">
      <h2 className='text-xl'>Create a todo</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Write an article about XState"
        className="border rounded-md p-2 max-w-xl"
      />
      <div className='flex gap-2 '>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center px-3 py-2 text-m font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center px-3 py-2 text-m rounded font-medium leading-4 text-white bg-white text-black border shadow-sm "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTodoButton;
