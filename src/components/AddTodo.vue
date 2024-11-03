<template>
  <span class="checkbox">
    <input type="checkbox" :id="props.id" class="checkbox" />
    <label :for="props.id" class="todo">
      {{ props.todoValue }}
    </label>
  </span>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  id: {
    type: String,
    require: true,
  },
  todoValue: {
    type: String,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    position: relative;
    padding: 0 0 0 30px;
  }

  input[type='checkbox'] + label::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(/src/assets/images/checkbox.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
    content: '';
  }

  input[type='checkbox']:checked + label {
    text-decoration: line-through;
  }

  input[type='checkbox']:checked + label::before {
    background-image: url(/src/assets/images/checkbox.png);
    background-position: right center;
  }
}

.todo.cmplt {
  text-decoration: line-through;
}
</style>
