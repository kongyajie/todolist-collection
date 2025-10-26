import { useState } from "react";
import type { Todo } from "../types/Todo";

const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (name: string) => {
    setTodoList([...todoList, {
      id: todoList.length + 1,
      name,
    }]);
  };

  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter((item: Todo) => item.id !== id));
  };

  return {
    todoList,
    addTodo,
    deleteTodo,
  };
}

export default useTodoList;