<template>
    <span class="checkbox">
        <input type="checkbox" :id="props.id" class="checkbox" />
        <label :for="props.id" class="todo"></label>
        <span class="todo-cont" @click="edit">{{ props.todoValue }}</span>
    </span>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    id: {
        type: String,
        require: true
    },
    todoValue: {
        type: String,
        require: true
    }
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
        display: block;
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        background-image: url(/src/assets/images/checkbox.png);
        background-repeat: no-repeat;
        background-position: left center;
        background-size: cover;
        content: '';
    }

    input[type='checkbox']:checked + label {
        background-image: url(/src/assets/images/checkbox.png);
        background-position: right center;
    }

    .todo-cont {
        word-break: break-word;
        cursor: pointer;
    }

    input[type='checkbox']:checked ~ .todo-cont {
        text-decoration: line-through;
    }
}

.todo.cmplt {
    text-decoration: line-through;
}
</style>
