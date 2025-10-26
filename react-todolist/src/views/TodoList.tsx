import { useEffect, useState, type SyntheticEvent, type KeyboardEvent } from 'react';
import './todoList.css';

interface TodoItem {
  id: number,
  name: string,
}

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [value, setValue] = useState('');

  const handleInputChange = (e: SyntheticEvent) => {
    setValue((e.target as HTMLInputElement).value);
  }

  const handleAdd = () => {
    if (value.trim() === '') return;

    setTodoList([...todoList, {
      id: todoList.length + 1,
      name: value,
    }])
    setValue('');
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  useEffect(() => {
    console.info(JSON.parse(JSON.stringify(todoList)));
  }, [todoList])

  const handleDelItem = (id: number) => {
    setTodoList(todoList.filter(item => item.id !== id));
  }
  return (
    <div className='todo-wrapper'>
      {/* 待办列表 */}
      <input type="text" value={value} onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
      <button onClick={handleAdd}>+Add</button>
      <ul>
        {todoList.map((item, index) => (
          <li className='todo-item' key={item.id}>
            <span className='todo-label'>{index + 1}.{item.name}</span>
            <button onClick={() => handleDelItem(item.id)}>x</button>
          </li>
        ))}
      </ul>
      <p>Total num is: {todoList.length}</p>
    </div>
  )
}

/**
 * 1、定义组件：文件名大写，组件名大写，
 * 2、列表渲染：{list.map(item => <li>item.name</li>)}
 * 3、受控表单：<input type="text" value={value} onChange={handleInputChange} />
 * 4、更新列表：todoList.concat()、[...todoList, {xxx}]
 * 5、键盘事件：<input onKeyDown={handleOnKeyDown}> if(e.key === 'Enter')xxx
 * 6、打印更新后的列表：useEffect(() => console.info(xxx))
 * 7、添加样式：单独的css文件
 */