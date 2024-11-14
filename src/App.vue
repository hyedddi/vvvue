<template>
    <!-- 라우터 -->
    <div class="container">
        <Header></Header>
        <div class="wrap">

            <hr>
            <div class="checkbox-wrap">
                <add-todo
                    v-for="(todo, index) in todoList"
                    :key="index"
                    :id="todo.id"
                    :todoValue="todo.todoValue"
                ></add-todo>
            </div>
        </div>
        <AddTodoBtn @click="addTodoActive = !addTodoActive"></AddTodoBtn>
        <!-- <AddInput
            :class="{ active: addTodoActive, unactive: !addTodoActive }"
            @update:addTodo="handleUpdateTodoList"
        ></AddInput> -->

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
// import AddInput from '@/components/AddInput.vue';
import AddTodoBtn from '@/components/AddTodoBtn.vue';
import BottomSheet from '@/components/common/BottomSheet.vue';

import FormInputWithLabel from '@/components/form/FormInputWithLabel.vue';
import { usePKManager } from '@/composables/usePKManager';

const addTodoActive = ref(false);
const todoList = ref([]);

const { incrementPK, getPKValue } = usePKManager();
const handleUpdateTodoList = (todoValue) => {
    incrementPK();

    const todoItem = {
        id: `todo${getPKValue()}`,
        todoValue
    };

    todoList.value = [...todoList.value, todoItem];
};

</script>


<style lang="scss" scoped>
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
