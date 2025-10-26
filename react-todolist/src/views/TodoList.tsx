import { useEffect } from "react";
import "./todoList.css";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import TodoStats from "../components/TodoStats";
import useTodoList from "../hooks/useTodoList";

export default function TodoList() {
  const { todoList, addTodo, deleteTodo } = useTodoList();

  useEffect(() => {
    console.info(JSON.parse(JSON.stringify(todoList)));
  }, [todoList]);

  return (
    <div className="todo-wrapper">
      {/* TodoInput */}
      <TodoInput onAdd={addTodo} />

      {/* TodoItem */}
      <ul>
        {todoList.map((item, index) => (
          <TodoItem
            key={item.id}
            item={item}
            index={index}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      {/* TodoStats */}
      <TodoStats total={todoList.length} />
    </div>
  );
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

/**
 * 组件拆分
 * 1、TodoInput：输入框+添加按钮，输入内容回车或点击按钮添加待办事项
 * 2、TodoItem：待办事项列表项，显示待办事项内容+删除按钮
 * 3、TodoStats：待办事项统计，显示待办事项总数
 */
