<template>
    <Header />
    <MainWrapper>
        <div class="checkbox-wrap">
            <InputCheckbox
                v-for="(todo, index) in todoList"
                :key="index"
                :id="todo.id"
                :todoValue="todo.todoValue"
            ></InputCheckbox>
        </div>
    </MainWrapper>
    <fixedBtn @click="addTodoActive = !addTodoActive"></fixedBtn>
    <InputText
        :class="{ active: addTodoActive, unactive: !addTodoActive }"
        @update:addTodo="handleUpdateTodoList"
    ></InputText>
</template>

<script setup>
import { ref } from 'vue';
import MainWrapper from '@/components/common/MainWrapperLayout.vue';
import Header from '@/components/common/HeaderLayout.vue';
import InputCheckbox from '@/components/input/InputCheckbox.vue';
import InputText from '@/components/input/InputText.vue';
import fixedBtn from '@/components/button/FixedBtn.vue';

const todoList = ref([]);
const handleUpdateTodoList = (item) => {
    todoList.value.push(item);
};

const addTodoActive = ref(false);
</script>

<style lang="scss">
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
