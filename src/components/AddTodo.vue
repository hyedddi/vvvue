<template>
    <span class="checkbox">
        <input type="checkbox" :id="id" class="checkbox" @input.prevent="handleSelected(id, todoValue)"/>
        <label :for="id" class="todo"></label>
        <span class="todo-cont" @click="edit">{{ todoValue }}</span>
    </span>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    id: {
        type: String,
        require: true
    },
    todoValue: {
        type: String,
        require: true
    }
});

const emit = defineEmits({
    selected: (id, todoValue) => typeof id === 'string' && typeof todoValue === 'string',
})

const handleSelected = (id, todoValue) => {
    emit('selected', id, todoValue);
}
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
