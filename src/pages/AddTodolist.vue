<template>
    <MainWrapper>
        <div class="todolist">
            <div class="checkbox-wrap">
                <InputCheckbox
                    v-for="(todo, index) in todoList"
                    :key="index"
                    :id="todo.id"
                    :todoValue="todo.todoValue"
                />
            </div>
        </div>
    </MainWrapper>
    <FixedBtn @click="useActiveHandler" />
    <DimLayer :dimlayer-active="activeStatus" />
    <BottomSheet
        :btmsht-active="activeStatus"
        ,
        :btmsht-btnSet="btnSet"
    />
    <!-- <InputText
        :class="{ active: addTodoActive, unactive: !addTodoActive }"
        @update:addTodo="handleUpdateTodoList"
    ></InputText> -->
</template>

<script setup>
import { ref } from 'vue';
import MainWrapper from '@/components/common/MainWrapperLayout.vue';
import InputCheckbox from '@/components/input/InputCheckbox.vue';
// import InputText from '@/components/input/InputText.vue';
import DimLayer from '@/components/common/DimLayer.vue';
import BottomSheet from '@/components/common/BottomSheet.vue';
import FixedBtn from '@/components/button/FixedBtn.vue';
import { useActiveStatus } from '@/composables/useActiveStatus.js';

//플로팅 버튼, 딤, 바텀시트 상태 업데이트
const { activeStatus, useActiveHandler } = useActiveStatus();

const btnSet = ref({
    type: 'bottom',
    length: 2,
});
</script>

<style lang="scss">
.checkbox-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
}
</style>
