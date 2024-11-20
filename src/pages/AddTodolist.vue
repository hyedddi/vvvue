<template>
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
    <FixedBtn @click="active"></FixedBtn>
    <DimLayer v-if="!active">
        <BottomSheet></BottomSheet>
    </DimLayer>
    <!-- <InputText
        :class="{ active: addTodoActive, unactive: !addTodoActive }"
        @update:addTodo="handleUpdateTodoList"
    ></InputText> -->
</template>

<script setup>
import { ref } from 'vue';
import MainWrapper from '@/components/common/MainWrapperLayout.vue';

import InputCheckbox from '@/components/input/InputCheckbox.vue';
import InputText from '@/components/input/InputText.vue';
import DimLayer from '@/components/common/DimLayer.vue';
import BottomSheet from '@/components/common/BottomSheet.vue';
import FixedBtn from '@/components/button/FixedBtn.vue';

import { useActiveStatus } from '@/composables/useActiveStatus';

const todoList = ref([]);
const handleUpdateTodoList = (item) => {
    todoList.value.push(item);
};

const active = useActiveStatus();



</script>

<style lang="scss">


.checkbox-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
}
</style>
