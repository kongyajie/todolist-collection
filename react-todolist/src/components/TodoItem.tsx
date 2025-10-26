import React from 'react';
import type { Todo } from '../types/Todo';

interface TodoItemProps {
  item: Todo;
  index: number;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, index, onDelete }) => {
  return (
    <li className='todo-item'>
      <span className='todo-label'>{index + 1}.{item.name}</span>
      <button onClick={() => onDelete(item.id)}>x</button>
    </li>
  )
}

export default TodoItem;