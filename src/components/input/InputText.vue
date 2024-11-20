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
import { ref, defineEmits, defineProps } from 'vue';

const textVal = ref({
    id: 0,
    todoValue: ''
});

const emit = defineEmits(['update:addTodo']);

const addTodo = function (e) {
    console.log(e.target.value);
    if (!e.target.value) {
        alert('일단 입력해');
        return false;
    }
    textVal.value.todoValue = e.target.value;
    emit('update:addTodo', {
        id: `todo${textVal.value.id}`,
        todoValue: textVal.value.todoValue
    });
    textVal.value.id++;
    e.target.value = '';
};

const props = defineProps(['class']);
</script>

<style lang="scss" scoped>
.text-input-wrap {
    padding: 0 0 2rem 0;
}

.text {
    display: block;
    width: calc(100% - 4rem);
    height: 4rem;
    padding: 0.5rem 1rem;
    margin: 2rem 2rem 0 2rem;
    border: 0.1rem solid $color-333;
    border-radius: 1rem;
    font-size: 1.8rem;

    ::placeholder {
        color: $color-acac;
    }
}
</style>
