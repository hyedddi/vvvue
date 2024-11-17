<template>
    <div
        class="btmsht-pop"
        :class="props.class"
    >
        <div class="text-input-wrap">
            <input
                type="text"
                class="text"
                placeholder="일단 입력하고 생각하기"
                @keyup.enter="addTodo"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';

const textVal = ref({
    id: 0,
    todoValue: '',
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
        todoValue: textVal.value.todoValue,
    });
    textVal.value.id++;
    e.target.value = '';
};

const props = defineProps(['class']);
</script>

<style lang="scss" scoped>
.btmsht-pop {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 400px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    border-style: dashed;
    border-radius: 20px 20px 0 0;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
}

.btmsht-pop.unactive {
    transform: translateY(100%);
}

.btmsht-pop.active {
    transform: translateY(0);
}

.text-input-wrap {
    padding: 0 0 20px 0;
}

.text {
    display: block;
    width: calc(100% - 40px);
    height: 40px;
    padding: 5px 10px;
    margin: 20px 20px 0 20px;
    border: 1px solid #333;
    border-radius: 10px;
    font-size: 18px;

    ::placeholder {
        color: #b6b6b6;
    }
}
</style>
