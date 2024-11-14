<template>
    <div class="form-element form-element-wrapper">
        <div v-if="labelText">
            <FormLabel :labelText="labelText" />
        </div>
        <div class="text-input-wrap">
            <FormInput
                :type="type"
                :placeholder="placeholder"
                :value="inputValue"
                :araiaLabel="araiaLabel"
                @typing="update"
            />
        </div>
    </div>
</template>

<script setup>
import FormLabel from '@/components/form/FormLabel.vue';
import FormInput from '@/components/form/FormInput.vue';
import { ref } from 'vue';

const props = defineProps({
    labelText: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
    initValue: {
        type: [Number, String],
        default: ''
    },
    araiaLabel: {
        type: String,
        default: ''
    },
});

const emit = defineEmits({
    update: (text) => typeof text === 'string',
});

const inputValue = ref(props.initValue);
const update = (payload) => {
    if(!payload.trim()) {
        alert('뭐라도 입력해야지 ^^?');
        return;
    }

    emit('update', String(payload).trim());
}
</script>

<style lang="scss" scoped>
.text-input-wrap {
    padding: 0 0 20px 0;
}
</style>