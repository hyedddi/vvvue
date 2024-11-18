<template>
    <Header />
    <MainWrapper>
        <div class="todolist">
            <div class="checkbox-wrap">
                <InputCheckbox
                    v-for="(todo, index) in todoList"
                    :key="index"
                    :id="todo.id"
                    :todoValue="todo.todoValue"
                ></InputCheckbox>
            </div>
        </div>
    </MainWrapper>
    <fixedBtn @click="activeBtnHandle"></fixedBtn>
    <DimLayer v-if="activeStatus"></DimLayer>
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
import DimLayer from '@/components/common/DimLayer.vue';
import fixedBtn from '@/components/button/FixedBtn.vue';

const todoList = ref([]);
const handleUpdateTodoList = (item) => {
    todoList.value.push(item);
};


const activeStatus = ref(false);
const activeBtnHandle = () => activeStatus.value = !activeStatus.value;

</script>

<style lang="scss">


.checkbox-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
}
</style>
