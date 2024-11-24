<template>
    <span class="checkbox">
        <input
            type="checkbox"
            :id="props.id"
            class="checkbox"
        />
        <label
            :for="props.id"
            class="todo"
        ></label>
        <span
            class="todo-cont"
            @click="edit"
            >{{ props.todoValue }}</span
        >
    </span>
</template>

<script setup>
//v-model?
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
    align-items: $align-c;
    gap: 1.6rem;
    font-size: 2rem;

    input[type='checkbox'] {
        @include none;
    }

    input[type='checkbox'] + label {
        display: block;
        flex-shrink: 0;
        width: 2rem;
        height: 2rem;
        background-image: url(/src/assets/images/checkbox.png);
        background-repeat: no-repeat;
        background-position: $align-l $align-c;
        background-size: cover;
        content: '';
    }

    input[type='checkbox']:checked + label {
        background-image: url(/src/assets/images/checkbox.png);
        background-position: $align-r $align-c;
    }

    .todo-cont {
        word-break: break-word;
        cursor: pointer;
    }

    input[type='checkbox']:checked ~ .todo-cont {
        text-decoration: line-through;
    }
}
</style>
