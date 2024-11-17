<template>
    <input
        class="text"
        :type="type"
        :placeholder="placeholder"
        :aria-label="araiaLabel"
        :value="inputValue"
        @input="handleInputValue($event)"
        @keydown.enter.prevent="handleEnter($event)"
    />
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    value: {
        type: [Number, String],
        default: '',
    },
    araiaLabel: {
        type: String,
        default: '',
    },
});

const emit = defineEmits({
    typing: (text) => typeof text === 'string',
});

const inputValue = ref(props.value);
const handleInputValue = (event) => {
    inputValue.value = event.target.value;
};

const handleEnter = (event) => {
    // reference: https://weaklion1.tistory.com/27
    if (event.isComposing) return;

    emit('typing', inputValue.value);
    clearValue();
};

const clearValue = () => {
    inputValue.value = '';
};
</script>

<style lang="scss" scoped>
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
