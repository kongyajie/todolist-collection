<template>
  <div class="todo-wrapper">

    <h4>TodoList</h4>
    <input type="text" v-model="value" @keydown="handleKeyDown"/>
    <button @click="handleAddItem">+Add</button>
    <ul>
      <li class="todo-item" v-for="item in todoList" :key="item.id">
        <span class="todo-label">{{ item.name }}</span>
        <button @click="handleDelItem(item.id)">x</button>
      </li>
    </ul>
    <p v-if="total > 0">总数量：{{ total }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface TodoItem {
  id: number;
  name: string;
}

const todoList = ref<TodoItem[]>([]);
const value = ref<string>('');

const handleAddItem = (): void => {
  if (value.value.trim() === '') return;
  todoList.value.push({
    id: todoList.value.length + 1,
    name: value.value
  });

  value.value = '';
}

const handleKeyDown = (e: KeyboardEvent): void => {
  if (e.key === 'Enter') {
    handleAddItem();
  }
}

const handleDelItem = (id: number): void => {
  const index = todoList.value.findIndex(el => el.id === id);
  todoList.value.splice(index, 1);
}

const total = computed(() => todoList.value.length)

</script>

<style scoped lang='css'>
.todo-wrapper {
  max-width: 300px;
}

.todo-item {
  display: flex;
}

.todo-label {
  margin-right: 10px;
}
</style>
