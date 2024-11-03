<template>
  <div class="text-input-wrap">
    <input
      type="text"
      class="text"
      placeholder="일단 입력하고 생각하기"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const textVal = ref({
  id: 0,
  todoValue: '',
});

const emit = defineEmits(['update:addTodo']);

const addTodo = function (e) {
  if (e.target.value == '') {
    return false;
  }
  textVal.value.todoValue = e.target.value;
  emit('update:addTodo', {
    id: `todo${textVal.value.id}`,
    todoValue: textVal.value.todoValue,
  });
  textVal.value.id++;
  e.target.value = '';
};
</script>

<style lang="scss" scoped>
.text-input-wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  padding: 0 0 20px 0;
  background: #fff;
}

.text {
  display: block;
  width: calc(100% - 40px);
  height: 40px;
  padding: 5px 10px;
  margin: 20px 20px 0 20px;
  border: 1px solid #333;
  border-radius: 10px;
  font-size: 18px;

  ::placeholder {
    color: #b6b6b6;
  }
}
</style>
