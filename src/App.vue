<script setup>
import { ref } from 'vue';
import Header from '@/components/HeaderLayout.vue';
import AddTodo from '@/components/AddTodo.vue';
import AddInput from '@/components/AddInput.vue';

const todoList = ref([]);
const handleUpdateTodoList = item => {
  todoList.value.push(item);

  console.log(todoList);
};
</script>

<template>
  <!-- 라우터 -->
  <div class="container">
    <Header></Header>
    <div class="wrap">
      <div class="checkbox-wrap">
        <add-todo
          v-for="(todo, index) in todoList"
          :key="index"
          :id="todo.id"
          :todoValue="todo.todoValue"
        ></add-todo>
      </div>
    </div>
    <AddInput @update:addTodo="handleUpdateTodoList"></AddInput>
  </div>
</template>

<style lang="scss">
// @import './assets/css/_variables.scss';
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 100%;
  margin: 0 auto;
}

.wrap {
  height: 100%;
  padding-bottom: 80px;
}

.checkbox-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
}
</style>
