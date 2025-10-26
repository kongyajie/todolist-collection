
import React, { useState } from 'react'

interface TodoInputProps {
  onAdd: (name: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  const handleAdd = () => {
    if (value.trim() === '') return;

    onAdd(value);
    setValue('');
  }
  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
      <button onClick={handleAdd}>+Add</button>
    </div>
  )
}

export default TodoInput;