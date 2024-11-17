<template>
    <div class="container">
        <Header />
        <div class="wrap">
            <div class="checkbox-wrap">
                <AddTodo
                    v-for="(todo, index) in todoList"
                    :key="index"
                    :id="todo.id"
                    :todoValue="todo.todoValue"
                    @selected="handleTodoComplete"
                />
            </div>
        </div>
        <AddTodoBtn @click="setAddTodoActive" />
        <BottomSheet :activeStatus="addTodoActive">
            <FormInputWithLabel
                placeholder="일단 입력하고 생각하기"
                @update="handleUpdateTodoList"
            />
        </BottomSheet>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/common/HeaderLayout.vue';
import AddTodo from '@/components/AddTodo.vue';
import AddTodoBtn from '@/components/AddTodoBtn.vue';
import BottomSheet from '@/components/common/BottomSheet.vue';

import FormInputWithLabel from '@/components/form/FormInputWithLabel.vue';
import { usePKManager } from '@/composables/usePKManager';

const addTodoActive = ref(false);
const setAddTodoActive = () => {
    addTodoActive.value = !addTodoActive.value;
};

const todoList = ref([]);
const completeTodoList = ref([]);

const { incrementPK, getPKValue } = usePKManager();

const handleUpdateTodoList = (todoValue) => {
    incrementPK();

    const todoItem = {
        id: `todo${getPKValue()}`,
        todoValue,
    };

    todoList.value = [...todoList.value, todoItem];
};

const handleTodoComplete = (id, todoValue) => {
    const completeTodoItem = {
        id,
        todoValue,
    };

    completeTodoList.value = [...completeTodoList.value, completeTodoItem];
    removeTodoItemFromList(id, todoList);
};

const removeTodoItemFromList = (id, list) => {
    list.value = list.value.filter((todo) => todo.id !== id);
};
</script>

<style lang="scss" scoped>
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
